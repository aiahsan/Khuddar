import * as React from 'react';
import { ScrollView, View, TouchableOpacity, Text,Image } from 'react-native'
import { styles } from '../../../styles/authStyles';
import Header from '../../../componnents/auth/header';
import { AntDesign } from '@expo/vector-icons';
import { Feather } from '@expo/vector-icons';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import Heading from '../../../componnents/home/headingComp';
import { useNavigation } from '@react-navigation/native';
import { Button, TextInput, Avatar } from 'react-native-paper';
import { Chip } from 'react-native-paper';
import { FAB } from 'react-native-paper';
import { RFPercentage, RFValue } from 'react-native-responsive-fontsize'
import TopDrawer from '../../../componnents/auth/drawer/topDrawer';
import * as ImagePicker from 'expo-image-picker';
import * as Yup from 'yup';
import { Formik, Form } from 'formik';
import { repository } from '../../../utiles/repository';
import LottieView from 'lottie-react-native';
import { useDispatch } from 'react-redux';
import DateTimePicker from '@react-native-community/datetimepicker';
import Moment from 'moment'
import DropDownPicker from 'react-native-dropdown-picker';
import {useSelector} from 'react-redux';
import {Add_All_members} from '../../../redux/actions/familyActionMehodes'


const DisplayingErrorMessagesSchema = Yup.object().shape({
    member_id: Yup.string().required('Required'),
});

const MyComponent = ({route}) => {
    let [page, setPage] = React.useState({});
    const navigation = useNavigation();


    const [image, setImage] = React.useState(null);
    const [cnicImage, setcnicImage] = React.useState(null);
    const [hasImage, sethasImage] = React.useState(null);
    const [showAnimation, setshowAnimation] = React.useState(false);
    const [show, setShow] = React.useState(false);
    const familyMembers=useSelector(x=>x.familyMembers);
    let [members, setmembers] = React.useState([]);

    const dispatch = useDispatch();

    const userr=useSelector(x=>x.userReducer);

    const postData = async (datapost) => {
        datapost.category_id=route &&route.params&&route.params.category_id?route.params.category_id:0;
        try {
            const { data, status } = await repository.OPD(datapost,{ headers: { 'secret': userr!=null&&userr.token&&userr.token.token?userr.token.token:"", 'user-id': userr!=null&&userr.id?userr.id:'' } }).then(x => x).then(x => x)
            console.log(data, status)
            if (data && data.status == 200 && data.success == true) {
                setshowAnimation(false)
                alert(data.message)
                datapost.member_id = "";
                
               

            }
            else {
                alert(data.message)
                setshowAnimation(false)
            }
        }
        catch (e) {
            setshowAnimation(false)

        }

    }

    const fetchFamily= async function () {
        try {

            const { data, status } = await repository.list_family_member({ headers: { 'secret': userr!=null&&userr.token&&userr.token.token?userr.token.token:"", 'user-id': userr!=null&&userr.id?userr.id:'' } }).then(x => x).then(x => x)
            console.log(data)
                if (status == 200 && data && data.success == true) {


                if (data.response.user && data.response.user.members)
                    {

                        setmembers(data.response.user.members.map(x=>{
                            return {
                                value:x.id,
                                label:x.name
                            }
                        }))}
                            dispatch(Add_All_members(data.response.user.members))
                setshowAnimation(false);
            }
            else {
                setshowAnimation(false);
            }
        }
        catch (e) {
            setshowAnimation(false);
        }
    };

    React.useEffect(() => {
        setshowAnimation(true);

        if(familyMembers.length<=0)
        {
            (async function(){
                await fetchFamily();
            })();
        }
        else
        {
            setmembers(familyMembers.map(x=>{
                return {
                    value:x.id,
                    label:x.name
                }
            }));
            setshowAnimation(false);

        }
      

    }, [])
    return <Formik
        initialValues={{
            date: '',
            member_id: '',
        }}
        validationSchema={DisplayingErrorMessagesSchema}
        onSubmit={async (values, { setSubmitting }) => {
            setshowAnimation(!showAnimation)

            await postData(values)
        }}
    >
        {({ errors, touched, handleChange, handleBlur, values, handleSubmit, setFieldValue }) => {
            // const pickImage = async () => {
            //     let result = await ImagePicker.launchImageLibraryAsync({
            //         mediaTypes: ImagePicker.MediaTypeOptions.All,
            //         allowsEditing: true,
            //         aspect: [4, 3],
            //         quality: 1,
            //         base64: true,
            //     });


            //     if (!result.cancelled) {
            //         setImage(result.uri);
            //         setFieldValue("image", result.base64);
            //     }
            // };
            // const pickCnic = async () => {
            //     let result = await ImagePicker.launchImageLibraryAsync({
            //         mediaTypes: ImagePicker.MediaTypeOptions.All,
            //         allowsEditing: true,
            //         aspect: [4, 3],
            //         quality: 1,
            //         base64: true,
            //     });


            //     if (!result.cancelled) {
            //         setcnicImage(result.uri);
            //         setFieldValue("cnic", result.base64);
            //     }
            // };

            return <View style={[{ backgroundColor: 'white', flex: 1 }]}>
                <TopDrawer />
                <ScrollView>
                    <View style={styles.ctr}>
                    </View>

                    <View style={[styles.ctr, styles.mt5]}>
                        <Heading head="OPD" label="Select member to register opd service" />

                        <DropDownPicker zIndex={4000}
                            placeholder="Select Family Member"
                            placeholderStyle={{color:"black"}}
                            items={members}
                            // defaultValue={"this.state.country"}
                            containerStyle={{ height: 40, width: '100%', marginTop: '5%' }}
                            style={{ backgroundColor: '#fafafa' }}
                            itemStyle={{
                                justifyContent: 'flex-start',
                            }}
                            dropDownStyle={{ backgroundColor: '#fafafa' }}
                            onChangeItem={item => {
                                // dispatch(setLanguage(item.value))
                                // setlanguagemain(item.value)
                                setFieldValue("member_id",item.value)
                            }}
                        />
                    
                        {touched.member_id && errors.member_id && <Text style={{ color: 'red', marginTop: 10 }}>{errors.member_id}</Text>}

                       



                        <TouchableOpacity disabled={showAnimation} mode="contained" style={[styles.buttonMain, styles.mt5, { marginBottom: 20 }, styles.themeBackColor, styles.border1]} onPress={handleSubmit}>
                            {showAnimation ? <LottieView

                                style={[{
                                    width: 100,
                                    height: 40,
                                    alignSelf: 'center'
                                }, styles.themeBackColor]}
                                autoPlay={true}
                                loop={true}
                                source={require('../../../animations/New/2.json')}
                            // OR find more Lottie files @ https://lottiefiles.com/featured
                            // Just click the one you like, place that file in the 'assets' folder to the left, and replace the above 'require' statement
                            /> : <Text style={styles.textTr, styles.themeColorwhite, { height: 30, textAlign: 'center', marginTop: 5, marginBottom: 5, color: 'white', fontSize: 18, fontFamily: 'PoppinsMedium', color: 'white' }}>Register</Text>
                            }
                        </TouchableOpacity>
                        {show && (
                            <DateTimePicker
                                testID="dateTimePicker"
                                mode="Date"
                                value={Date.now()}
                                is24Hour={true}
                                display="default"
                                onChange={(event, selectedDate) => {
                                    setShow(false);
                                    setFieldValue("date", Moment(selectedDate).format("DD-MM-yyyy"));
                                }}
                            />
                        )}
                    </View>

                </ScrollView>

            </View>

        }}
    </Formik>
}

export default MyComponent;
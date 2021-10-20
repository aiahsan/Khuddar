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
    description: Yup.string().required('Required'),
    capital: Yup.number('Must be numbers').required('Required'),
});

const MyComponent = () => {
    let [page, setPage] = React.useState({});
    const navigation = useNavigation();


    const [image, setImage] = React.useState(null);
    const [cnicImage, setcnicImage] = React.useState(null);
    const [hasImage, sethasImage] = React.useState(null);
    const [showAnimation, setshowAnimation] = React.useState(false);
    const [show, setShow] = React.useState(false);
    const familyMembers=useSelector(x=>x.familyMembers);
    let [members, setmembers] = React.useState([]);
    const userr=useSelector(x=>x.userReducer);

    const dispatch = useDispatch();


    const postData = async (datapost) => {

        console.log(datapost);
        try {
            const { data, status } = await repository.business_add(datapost,{ headers: { 'secret': userr!=null&&userr.token&&userr.token.token?userr.token.token:"", 'user_id': userr!=null&&userr.id?userr.id:'' } }).then(x => x).then(x => x)
            console.log(data, status)
            if (data && data.status == 200 && data.success == true) {
                setshowAnimation(false)
                alert(data.message)
            
                datapost.description= "";
                datapost.capital= "";
               

            }
            else {
                alert(data.message, "Error")
                setshowAnimation(false)
            }
        }
        catch (e) {
            setshowAnimation(false)

        }

    }

 

    return <Formik
        initialValues={{
            description: '',
            capital: '',
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
                        <Heading head="Business Registration Details" label="Upload Details about Business" />

                        <TextInput
                            label="Enter description"
                            mode='outlined'
                            onChangeText={handleChange('description')}
                            onBlur={handleBlur('description')}
                            value={values.description}
                            style={[styles.textInput, styles.mt5]}
                            left={
                                <TextInput.Icon
                                    name={() => <AntDesign name="filetext1" size={16} style={[styles.themeColor, { paddingTop: '30%' }]} />}

                                />
                            } />
                        {touched.description && errors.description && <Text style={{ color: 'red', marginTop: 10 }}>{errors.description}</Text>}

                        <TextInput
                            label="Enter Capital"
                            mode='outlined'
                            onChangeText={handleChange('capital')}
                            onBlur={handleBlur('capital')}
                            value={values.capital}
                            style={[styles.textInput, styles.mt5]}
                            left={
                                <TextInput.Icon
                                    name={() => <AntDesign name="filetext1" size={16} style={[styles.themeColor, { paddingTop: '30%' }]} />}

                                />
                            } />
                        {touched.capital && errors.capital && <Text style={{ color: 'red', marginTop: 10 }}>{errors.capital}</Text>}

                 



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
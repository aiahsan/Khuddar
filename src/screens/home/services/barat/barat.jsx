import * as React from 'react';
import { ScrollView, View, TouchableOpacity, Text } from 'react-native'
import { styles } from '../../../../styles/authStyles';
import Header from '../../../../componnents/auth/header';
import { AntDesign } from '@expo/vector-icons';
import { Feather } from '@expo/vector-icons';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import Heading from '../../../../componnents/home/headingComp';
import { useNavigation } from '@react-navigation/native';
import { Button, TextInput, Avatar } from 'react-native-paper';
import { Chip } from 'react-native-paper';
import { FAB } from 'react-native-paper';
import { RFPercentage, RFValue } from 'react-native-responsive-fontsize'
import TopDrawer from '../../../../componnents/auth/drawer/topDrawer';
import * as ImagePicker from 'expo-image-picker';
import * as Yup from 'yup';
import { Formik, Form } from 'formik';
import { repository } from '../../../../utiles/repository';
import LottieView from 'lottie-react-native';
import { useDispatch } from 'react-redux';
import DateTimePicker from '@react-native-community/datetimepicker';
import Moment from 'moment'
import DropDownPicker from 'react-native-dropdown-picker';
import {useSelector} from 'react-redux';
import {Add_All_members} from '../../../../redux/actions/familyActionMehodes'

const DisplayingErrorMessagesSchema = Yup.object().shape({
    groom_name: Yup.string().required('Required'),
    confirmation_date: Yup.string().required('Required'),
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
            const { data, status } = await repository.baraat_add(datapost,{ headers: { 'secret': userr!=null&&userr.token&&userr.token.token?userr.token.token:"", 'user_id': userr!=null&&userr.id?userr.id:'' } }).then(x => x).then(x => x)
            console.log(data, status)
            if (data && data.status == 200 && data.success == true) {
                setshowAnimation(false)
                alert(data.message)
                datapost.date = "";
                datapost.member_id = "";
                
               

            }
            else {
                alert(data.message, "Error")
                setshowAnimation(false)
            }
        }
        catch (e) {
            alert(e)
            setshowAnimation(false)

        }

    }

    
    return <Formik
        initialValues={{
            confirmation_date: '',
            groom_name: '',
        }}
        validationSchema={DisplayingErrorMessagesSchema}
        onSubmit={async (values, { setSubmitting }) => {
            setshowAnimation(!showAnimation)
            await postData(values)
        }}
    >
        {({ errors, touched, handleChange, handleBlur, values, handleSubmit, setFieldValue }) => {
       

            return <View style={[{ backgroundColor: 'white', flex: 1 }]}>
                <TopDrawer />
                <ScrollView>
                    <View style={styles.ctr}>
                    </View>

                    <View style={[styles.ctr, styles.mt5]}>
                    <Heading head="Barat Details" label="Upload Details about Barat" />
                        
                    <TextInput
                                label="Groom Name"
                                mode='outlined'
                                onChangeText={handleChange('groom_name')}
                                onBlur={handleBlur('groom_name')}
                                value={values.groom_name}
                                value={values.date_of_birth}
                                style={[styles.textInput, { width: '100%' }]}
                                left={
                                    <TextInput.Icon
                                        name={() => <AntDesign name="user" size={16} style={[styles.themeColor, { paddingTop: '30%' }]} />}
                                    />
                                } />
                        {touched.groom_name && errors.groom_name && <Text style={{ color: 'red', marginTop: 10 }}>{errors.groom_name}</Text>}


                        <View style={[{ flexDirection: 'row', alignItems: 'center' }, styles.mt5]}>
                            <TextInput
                                label="Confirmation Date"
                                mode='outlined'
                                disabled
                                value={values.confirmation_date}
                                style={[styles.textInput, { width: '60%' }]}
                                left={
                                    <TextInput.Icon
                                        name={() => <AntDesign name="user" size={16} style={[styles.themeColor, { paddingTop: '30%' }]} />}
                                    />
                                } />
                            <Button onPress={() => setShow(true)} style={{ width: '35%', marginLeft: '5%', marginTop: '1%' ,zIndex:-10}} labelStyle={{ color: 'white' }} mode='contained'>Select</Button>
                        </View>
                        {touched.confirmation_date && errors.confirmation_date && <Text style={{ color: 'red', marginTop: 10 }}>{errors.confirmation_date}</Text>}




                        <TouchableOpacity disabled={showAnimation} mode="contained" style={[styles.buttonMain, styles.mt5, { marginBottom: 20 }, styles.themeBackColor, styles.border1]} onPress={handleSubmit}>
                            {showAnimation ? <LottieView

                                style={[{
                                    width: 100,
                                    height: 40,
                                    alignSelf: 'center'
                                }, styles.themeBackColor]}
                                autoPlay={true}
                                loop={true}
                                source={require('../../../../animations/New/2.json')}
                            // OR find more Lottie files @ https://lottiefiles.com/featured
                            // Just click the one you like, place that file in the 'assets' folder to the left, and replace the above 'require' statement
                            /> : <Text style={styles.textTr, styles.themeColorwhite, { height: 30, textAlign: 'center', marginTop: 5, marginBottom: 5, color: 'white', fontSize: 18, fontFamily: 'PoppinsMedium', color: 'white' }}>Register Barat</Text>
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
                                    setFieldValue("confirmation_date", Moment(selectedDate).format("DD-MM-yyyy"));
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
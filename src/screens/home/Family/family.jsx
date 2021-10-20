import * as React from 'react';
import { ScrollView, View, TouchableOpacity, Text } from 'react-native'
import { styles } from '../../../styles/authStyles';
import Header from '../../../componnents/auth/header';
import { AntDesign } from '@expo/vector-icons';
import { Feather } from '@expo/vector-icons';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import Heading from '../../../componnents/home/headingComp';
import { useNavigation } from '@react-navigation/native';
import { Button, TextInput ,Avatar} from 'react-native-paper';
import { Chip } from 'react-native-paper';
import { FAB } from 'react-native-paper';
import { RFPercentage, RFValue } from 'react-native-responsive-fontsize'
import TopDrawer from '../../../componnents/auth/drawer/topDrawer';
import * as ImagePicker from 'expo-image-picker';
import * as Yup from 'yup';
import { Formik, Form } from 'formik';
import { repository } from '../../../utiles/repository';
import LottieView from 'lottie-react-native';
import { useDispatch, useSelector } from 'react-redux';
import DateTimePicker from '@react-native-community/datetimepicker';
import Moment from 'moment';
import {Add_familyMember} from '../../../redux/actions/familyActionMehodes'
let familyArray = ["Father", "Mother", "Brother", "Sister", "Wife", "Husband", "Son", "Daughter"]

const DisplayingErrorMessagesSchema = Yup.object().shape({
    name: Yup.string().required('Required'),
    date_of_birth: Yup.string().required('Required'),
    type: Yup.string().required('Required'),
    image: Yup.string().required('Required'),

});

const MyComponent = () => {
    let [page, setPage] = React.useState({});
    const navigation = useNavigation();


    const [image, setImage] = React.useState(null);
    const [cnicImage, setcnicImage] = React.useState(null);
    const [hasImage, sethasImage] = React.useState(null);
    const [showAnimation, setshowAnimation] = React.useState(false);
    const [show, setShow] = React.useState(false);
    const userr=useSelector(x=>x.userReducer);
    const dispatch = useDispatch();


    const postData = async (datapost) => {

        console.log(datapost);
        try
        {


            const { data, status } = await repository.add_family_member(datapost,{ headers: { 'secret': userr!=null&&userr.token&&userr.token.token?userr.token.token:"", 'user_id': userr!=null&&userr.id?userr.id:'' } }).then(x => x).then(x => x)
            console.log(data, status)
            if (data && data.status == 200 && data.success == true) {
                setshowAnimation(false)
               alert(data.message)
               datapost.date_of_birth="";
               datapost.name="";
               datapost.type="";
               datapost.cninc="";
               datapost.image="";
            setImage(null);
            setcnicImage(null);
            if(data.response&&data.response.member)
                dispatch(Add_familyMember(data.response.member))
            }
            else {
                alert(data.message, "Error")
                setshowAnimation(false)
            }
        }
        catch(e)
        {
            alert(e)
            setshowAnimation(false)

        }
        
    }

    return <Formik
        initialValues={{
            name: '',
            date_of_birth: '',
            type: '',
            image: '',
            cnic:''

        }}
        validationSchema={DisplayingErrorMessagesSchema}
        onSubmit={async (values, { setSubmitting }) => {
            setshowAnimation(!showAnimation)

            await postData(values)
        }}
    >
        {({ errors, touched, handleChange, handleBlur, values, handleSubmit, setFieldValue }) => {
            const pickImage = async () => {
                let result = await ImagePicker.launchImageLibraryAsync({
                    mediaTypes: ImagePicker.MediaTypeOptions.All,
                    allowsEditing: true,
                    aspect: [4, 3],
                    quality: 1,
                    base64: true,
                });
        
        
                if (!result.cancelled) {
                    setImage(result.uri);
                    setFieldValue("image",result.base64);
                }
            };
            const pickCnic = async () => {
                let result = await ImagePicker.launchImageLibraryAsync({
                    mediaTypes: ImagePicker.MediaTypeOptions.All,
                    allowsEditing: true,
                    aspect: [4, 3],
                    quality: 1,
                    base64: true,
                });
        
        
                if (!result.cancelled) {
                    setcnicImage(result.uri);
                    setFieldValue("cnic",result.base64);
                }
            };
           
           
           return <View style={[{ backgroundColor: 'white', flex: 1 }]}>
                <TopDrawer />
                <ScrollView>
                    <View style={styles.ctr}>
                    </View>

                    <View style={[styles.ctr, styles.mt5]}>
                        <Heading head="Family Details" label="Upload Details about your family" />

                        <TextInput
                            label="Enter Family Member Name"
                            mode='outlined'
                            onChangeText={handleChange('name')}
                            onBlur={handleBlur('name')}
                            value={values.name}
                            style={[styles.textInput, styles.mt5]}
                            left={
                                <TextInput.Icon
                                    name={() => <AntDesign name="user" size={16} style={[styles.themeColor, { paddingTop: '30%' }]} />}

                                />
                            } />
                        {touched.name && errors.name && <Text style={{ color: 'red', marginTop: 10 }}>{errors.name}</Text>}

                        <View style={[{flexDirection:'row',alignItems:'center'},styles.mt5]}>
                        <TextInput
                            label="Date of Birth"
                            mode='outlined'
                            
                            value={values.date_of_birth}
                            style={[styles.textInput,{width:'60%'}]}
                            left={
                                <TextInput.Icon
                                    name={() => <AntDesign name="user" size={16} style={[styles.themeColor, { paddingTop: '30%' }]}/>}
                                />
                            }/>
                            <Button onPress={()=>setShow(true)} style={{width:'35%',marginLeft:'5%',marginTop:'1%'}} labelStyle={{color:'white'}} mode='contained'>Select</Button>
                        </View>
                        {touched.date_of_birth && errors.date_of_birth && <Text style={{ color: 'red', marginTop: 10 }}>{errors.date_of_birth}</Text>}

                        <Heading head="" label="Family Type" />

                        <ScrollView horizontal={true} showsHorizontalScrollIndicator={false} style={{ marginTop: 10 }}>
                            {familyArray.map((x, i) => <Chip style={{ marginRight: 4, backgroundColor: values.type == x ? "lightgrey" : "white" }} icon="information" mode="flat" onPress={() => setFieldValue("type", x)}>{x} </Chip>)}
                        </ScrollView>
                        {touched.type && errors.type && <Text style={{ color: 'red', marginTop: 10 }}>{errors.type}</Text>}

                        <Heading head="" label="Upload Image / CNIC" />


                        <FAB
                            style={styles.fabupd}
                            small
                            icon="plus"
                            label="Upload Image"
                            onPress={() => pickImage()}
                        />
                        {touched.image && errors.image && <Text style={{ color: 'red', marginTop: 10 }}>{errors.image}</Text>}
                    {
                        image!=null? <Avatar.Image size={100} style={{ alignSelf: 'center' }} source={{ uri: image }} />
:<></>
                    }
                        <FAB
                            style={styles.fabupd}
                            small
                            icon="plus"
                            label="Upload CNIC"
                            onPress={() => pickCnic()} />
              {
                        cnicImage!=null? <Avatar.Image size={100} style={{ alignSelf: 'center' }} source={{ uri: cnicImage }} />
:<></>
                    }
      

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
                            /> : <Text style={styles.textTr, styles.themeColorwhite, { height: 30, textAlign: 'center', marginTop: 5, marginBottom: 5, color: 'white', fontSize: 18, fontFamily: 'PoppinsMedium', color: 'white' }}>Add Member</Text>
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
                                    setFieldValue("date_of_birth",Moment(selectedDate).format("DD-MM-yyyy"));
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
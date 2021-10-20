import React,{useState} from 'react';
import { View, Image, Text, ScrollView, SafeAreaView,TouchableOpacity} from 'react-native';
import { styles } from '../../styles/authStyles';
import { Button,TextInput,Avatar  } from 'react-native-paper';
import { Ionicons } from '@expo/vector-icons';
import Heading from '../../componnents/home/headingComp';
import { AntDesign } from '@expo/vector-icons';
import { Feather } from '@expo/vector-icons';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { Nav } from '../../navigation/navigationType'
import {useNavigation} from '@react-navigation/native';
import * as Animatable from 'react-native-animatable';
import {RFValue} from 'react-native-responsive-fontsize';
import * as ImagePicker from 'expo-image-picker';
import * as Yup from 'yup';
import { Formik, Form } from 'formik';
import { repository } from '../../utiles/repository';
import LottieView from 'lottie-react-native';
import { useDispatch } from 'react-redux';
import {Login} from '../../redux/actions/userActionMethodes'

const DisplayingErrorMessagesSchema = Yup.object().shape({
    
    username: Yup.string().required('Required'),
    password: Yup.string()
        .required('Required').matches(
            /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/,
            "Must Contain 8 Characters, One Uppercase, One Lowercase, One Number and one special case Character"
        ),

    confirmPassword: Yup.string()
        .required('Required').oneOf([Yup.ref('password'), null], 'Passwords must match'),

    });


export default () => {
    const navigation=useNavigation();
    const [image, setImage] = React.useState(null);
    const [base64image, setbase64Image] = React.useState(null);
    const [hasImage, sethasImage] = React.useState(null);
    let [showPass, setShowPass] = useState(false);
    const [showAnimation, setshowAnimation] = useState(false);
    const dispatch = useDispatch();

    React.useEffect(()=>{
        (async () => {
            if (Platform.OS !== 'web') {
                const { status } = await ImagePicker.requestCameraRollPermissionsAsync();
                if (status !== 'granted') {
                    alert('Sorry, we need camera roll permissions to make this work!');
                }
            }
        })();
    },[])

    const postData = async (datapost) => {

        datapost.image=base64image;
        const { data, status } = await repository.register(datapost).then(x => x).then(x => x)
        console.log(data, status)
        if (data && data.status == 200 && data.success == true) {
            setshowAnimation(false)
            if (data.response.user) {
                dispatch(Login(data.response.user));
            }

        }
        else {
            alert(data.message, "Error")
            setshowAnimation(false)
        }

    }
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
            setbase64Image(result.base64);
            sethasImage(true);
        }
        else {
            sethasImage(false);
            setbase64Image(null);



        }
    };
    return <Formik
    initialValues={{
        username: '',
        name: '',
        email: '',
        phone: '',
        password: '',
        role: 2,
        confirmPassword: '',

    }}
    validationSchema={DisplayingErrorMessagesSchema}
    onSubmit={async (values, { setSubmitting }) => {
        if(hasImage!=null && hasImage==true)
        {
            setshowAnimation(!showAnimation)

            await postData(values)
        }
        else
        {
            sethasImage(false);
        }
    }}
>
    {({ errors, touched, handleChange, handleBlur, values, handleSubmit }) => {
        return <View style={{flex:1,backgroundColor:'white',justifyContent:'center'}}>
        <Animatable.View animation="fadeInLeft">
            <ScrollView showsVerticalScrollIndicator={false}>
            <View style={styles.containerLeft}>
                <Image style={[styles.logo,{alignSelf:'center',marginBottom:RFValue(30)},styles.mt5,styles]} source={require('../../images/kdm.png')} />
                <Text style={[styles.mainTitleHead]}><Text style={styles.themeColor}>S</Text><Text>ign</Text><Text style={styles.themeColor}>U</Text>p</Text>
                <Text style={[styles.mainpara]}>Please enter your credentials</Text>
                {/* <TextInput
                        label="Full Name"
                        mode='outlined'
                        style={[styles.textInput, styles.mt5]}
                        onChangeText={handleChange('name')}
                        onBlur={handleBlur('name')}
                        value={values.name}
                        
                        left={
                            <TextInput.Icon
                                name={() => <Feather name="user" size={16} style={[styles.themeColor, { paddingTop: '30%' }]} />}

                            />
                        } />

                    {touched.name && errors.name && <Text style={{ color: 'red', marginTop: 10 }}>{errors.name}</Text>}

                    <TextInput
                        label="Email"
                        mode='outlined'
                        onChangeText={handleChange('email')}
                        onBlur={handleBlur('email')}
                        style={[styles.textInput, styles.mt5]}
                        value={values.email}
                        left={
                            <TextInput.Icon
                                name={() => <MaterialCommunityIcons name="email-outline" size={16} style={[styles.themeColor, { paddingTop: '30%' }]} />}

                            />
                        } />
                    {touched.email && errors.email && <Text style={{ color: 'red', marginTop: 10 }}>{errors.email}</Text>} */}

                    <TextInput
                        label="User Name"
                        mode='outlined'
                        onChangeText={handleChange('username')}
                        onBlur={handleBlur('username')}
                        value={values.username}

                        style={[styles.textInput, styles.mt5]}
                        left={
                            <TextInput.Icon
                                name={() => <MaterialCommunityIcons name="email-outline" size={16} style={[styles.themeColor, { paddingTop: '30%' }]} />}

                            />
                        } />
                    {touched.username && errors.username && <Text style={{ color: 'red', marginTop: 10 }}>{errors.username}</Text>}

            
                    {/* <TextInput
                        label="Phone"
                        mode='outlined'
                        onChangeText={handleChange('phone')}
                        onBlur={handleBlur('phone')}
                        value={values.phone}
                        keyboardType = 'number-pad'

                        style={[styles.textInput, styles.mt5]}
                        left={
                            <TextInput.Icon
                                name={() => <Feather name="phone-call" size={16} style={[styles.themeColor, { paddingTop: '30%' }]} />}

                            />
                        }
                    />
                    {touched.phone && errors.phone && <Text style={{ color: 'red', marginTop: 10 }}>{errors.phone}</Text>} */}

                    <TextInput
                        label="Password"
                        mode='outlined'
                        onChangeText={handleChange('password')}
                        onBlur={handleBlur('password')}
                        value={values.password}

                        style={[styles.textInput, styles.mt5]}
                        left={
                            <TextInput.Icon
                                name={() => <AntDesign name="lock1" size={16} style={[styles.themeColor, { paddingTop: '30%' }]} />}

                            />
                        }
                    />
                    {touched.password && errors.password && <Text style={{ color: 'red', marginTop: 10 }}>{errors.password}</Text>}

                    <TextInput
                        label="Confirm Password"
                        mode='outlined'
                        onChangeText={handleChange('confirmPassword')}
                        onBlur={handleBlur('confirmPassword')}
                        value={values.confirmPassword}

                        style={[styles.textInput, styles.mt5]}
                        left={
                            <TextInput.Icon
                                name={() => <AntDesign name="lock1" size={16} style={[styles.themeColor, { paddingTop: '30%' }]} />}

                            />
                        }
                    />

                    {touched.confirmPassword && errors.confirmPassword && <Text style={{ color: 'red', marginTop: 10 }}>{errors.confirmPassword}</Text>}
                    {/* <Heading head="Profile" label="UserProfile"/>
                        <View style={{justifyContent:'center'}}>
                            
                        <Avatar.Image size={100} style={{ alignSelf: 'center' }} source={{ uri: image }} />
                        <TouchableOpacity onPress={()=>pickImage()} style={{ alignSelf: 'center',position:'relative',top:'-90%',left:'10%' }}>
                        <MaterialCommunityIcons name="circle-edit-outline" size={24} color="black" />
                        </TouchableOpacity>
                        </View>
                        {hasImage!=null && hasImage==false && <Text style={{ color: 'red', marginTop: 10 }}>Image Required</Text>} */}

                    <TouchableOpacity disabled={showAnimation} mode="contained" style={[styles.buttonMain, styles.mt5,styles.themeBackColor, styles.border1]} onPress={handleSubmit}>
                            {showAnimation?<LottieView
                              
                              style={[{
                                width: 100,
                                height: 40,
                                alignSelf:'center'
                            },styles.themeBackColor]}
                              autoPlay={true}
                              loop={true}
                              source={require('../../animations/New/2.json')}
                          // OR find more Lottie files @ https://lottiefiles.com/featured
                          // Just click the one you like, place that file in the 'assets' folder to the left, and replace the above 'require' statement
                          />:   <Text style={styles.textTr, styles.themeColorwhite,{height: 30,textAlign:'center', marginTop: 5, marginBottom: 5, color: 'white', fontSize: 18, fontFamily: 'PoppinsMedium' ,color:'white'}}>Register</Text>
                        }
                     </TouchableOpacity>
                    <View style={{ alignSelf: 'center' }}>
                        <TouchableOpacity onPress={() => navigation.goBack()}>
                            <Text style={[styles.mainpara, styles.mt10]}>have an account? <Text style={styles.themeColor}>Sign in</Text></Text>

                        </TouchableOpacity>
                        <TouchableOpacity onPress={() => navigation.push(Nav.Forgot)}>
                            <Text style={[styles.mainpara, { textAlign: 'center' }]}>Forgot<Text style={styles.themeColor}>Password</Text></Text>

                        </TouchableOpacity>
                    </View>

                
            </View>
        </ScrollView></Animatable.View>
        </View>

    }}
</Formik>
}
import React, { useState } from 'react';
import { View, Image, Text, ScrollView, SafeAreaView, TouchableOpacity } from 'react-native';
import { styles } from '../../styles/authStyles';
import { Button } from 'react-native-paper';
import { TextInput } from 'react-native-paper';
import { AntDesign } from '@expo/vector-icons';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
import { Nav } from '../../navigation/navigationType'
import { Login } from '../../redux/actions/userActionMethodes'
import { useDispatch } from 'react-redux';
import { RFValue } from 'react-native-responsive-fontsize';
import * as Animatable from 'react-native-animatable';
import { Formik, Form } from 'formik';
import { repository } from '../../utiles/repository';
import { useSelector } from 'react-redux'
import * as Yup from 'yup';
import LottieView from 'lottie-react-native';

const DisplayingErrorMessagesSchema = Yup.object().shape({
    family_code: Yup.string().required('Required'),
});


export default () => {
    const navigation = useNavigation();
    const dispatch = useDispatch();

    const [showAnimation, setshowAnimation] = useState(false);
    let [showPass, setShowPass] = useState(false);

    const handleLogin = () => {

        dispatch(Login({
            _token: "65as6dt6ar3hf",
            id: 1
        }))
    }

    const postData = async (datapost) => {

            
        const { data, status } = await repository.member_login(datapost).then(x => x).then(x => x)
        if (data && data.status == 200 && data.success == true) {
            console.log(data.response)
            setshowAnimation(false)
            if (data.response.otp) {
                navigation.navigate(Nav.OTP,{otp:datapost.family_code})

            }

        }
        else {
            alert(data.message, "Error")
            setshowAnimation(false)
        }

    }
    return <Formik
        initialValues={{
            family_code: 'abcdgwgtfasdasd',
           
        }}
        validationSchema={DisplayingErrorMessagesSchema}
        onSubmit={async (values, { setSubmitting }) => {
            setshowAnimation(!showAnimation)
            await postData(values)
        }}
    >
        {({ errors, touched, handleChange, handleBlur, values, handleSubmit }) => {

            return <View style={{ flex: 1, backgroundColor: 'white' }}>

                <Animatable.View animation="fadeInLeft">
                    <ScrollView showsVerticalScrollIndicator={false} style={{ backgroundColor: 'white' }}>
                        <View style={styles.containerLeft}>

                        </View>
                        <View style={styles.containerLeft}>
                            <Image style={[styles.logo, { alignSelf: 'center', marginBottom: RFValue(30) }, styles.mt5, styles]} source={require('../../images/kdm.png')} />

                            <Text style={[styles.mainTitleHead, styles.mt3]}><Text style={styles.themeColor}>W</Text><Text>elcome</Text><Text style={styles.themeColor}> B</Text>ack</Text>
                            <Text style={[styles.mainpara, styles.mnt1]}>Sign in to continue</Text>

                            <TextInput
                                label="Family Code "
                                onChangeText={handleChange('familycode')}
                                onBlur={handleBlur('familycode')}
                                value={values.family_code}
                                mode='outlined'
                                style={[styles.textInput, styles.mt5]}
                                left={
                                    <TextInput.Icon
                                        name={() => <MaterialCommunityIcons name="email-outline" size={16} style={[styles.themeColor, { paddingTop: '30%' }]} />}
                                    />
                                } />
                            {touched.family_code && errors.family_code && <Text style={{ color: 'red', marginTop: 10 }}>{errors.family_code}</Text>}

                            <TouchableOpacity disabled={showAnimation} mode="contained" style={[styles.buttonMain, styles.mt5, styles.themeBackColor, styles.border1, styles.customShadow]} onPress={handleSubmit}>
                                {showAnimation ? <LottieView

                                    style={[{
                                        width: 100,
                                        height: 40,
                                        alignSelf: 'center'
                                    }]}
                                    autoPlay={true}
                                    loop={true}
                                    source={require('../../animations/New/2.json')}
                                // OR find more Lottie files @ https://lottiefiles.com/featured
                                // Just click the one you like, place that file in the 'assets' folder to the left, and replace the above 'require' statement
                                /> : <Text style={styles.textTr, styles.themeColorwhite, { height: 30, textAlign: 'center', marginTop: 5, marginBottom: 5, color: 'white', fontSize: 18, fontFamily: 'PoppinsMedium' }}>Send Code</Text>
                                }
                            </TouchableOpacity>

                            <View style={{ alignSelf: 'center' }}>
                                {/* <TouchableOpacity onPress={()=> navigation.push(Nav.Signup)}>
                     <Text style={[styles.mainpara, styles.mt10]}>Don't have an account? <Text style={styles.themeColor}>Signup</Text></Text>
   
                     </TouchableOpacity> */}
                                <TouchableOpacity onPress={() => navigation.push(Nav.Forgot)}>
                                    <Text style={[styles.mainpara, { textAlign: 'center' }, styles.mt5]}>Forgot <Text style={styles.themeColor}>Password</Text></Text>
                                </TouchableOpacity>
                            </View>

                        </View>
                    </ScrollView>

                </Animatable.View>

            </View>

        }}
    </Formik>

}
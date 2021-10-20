import React, { useEffect } from 'react';
import { View, TouchableOpacity, ScrollView, Text } from 'react-native';
import Carousel from 'react-native-snap-carousel';
import { sliderWidth, itemWidth } from '../../../carsoul/styles/SliderEntry';
import SliderEntry from '../../../carsoul/components/SliderEntry';
import { styles } from '../../../styles/authStyles';
import TopDrawer from '../../../componnents/auth/drawer/topDrawer';
import Heading from '../../../componnents/home/headingComp'
import { RFPercentage, RFValue } from 'react-native-responsive-fontsize';
import { Avatar, Button, Card, Title, Paragraph, TextInput, Snackbar } from 'react-native-paper';
import { useSelector, useDispatch } from 'react-redux';
import * as ImagePicker from 'expo-image-picker';
import * as Yup from 'yup';
import { Formik, Form } from 'formik';
import { repository } from '../../../utiles/repository';
import { AntDesign } from '@expo/vector-icons';
import { FAB } from 'react-native-paper';
import * as DocumentPicker from 'expo-document-picker';
import * as FileSystem from 'expo-file-system';
import LottieView from 'lottie-react-native';

const DisplayingErrorMessagesSchema = Yup.object().shape({
    description: Yup.string().required('Required'),
    cv: Yup.string().required('Required'),

});

export default (props) => {
    const [services, setServices] = React.useState([]);
    const [image, setImage] = React.useState(null);
    const [showAnimation, setshowAnimation] = React.useState(false);
    const userr=useSelector(x=>x.userReducer);

    const dispatch = useDispatch();
    useEffect(() => {
        if(props.route && props.route.params && props.route.params.x)
        {
            
    
            setServices([{
                title: props.route.params.x.title,
                subtitle: props.route.params.x.desciption,
                illustration: props.route.params.x.image,
                data: ""
            }]);
        }
     
    }, []);
    const postData = async (datapost) => {
        setshowAnimation(true)
        console.log(datapost,"khh")
        try
        {
            datapost.job_id=props.route.params.x.id?props.route.params.x.id:0;
            const { data, status } = await repository.jobs_Apply(datapost,{ headers: { 'secret': userr!=null&&userr.token&&userr.token.token?userr.token.token:"", 'user_id': userr!=null&&userr.id?userr.id:'' } }).then(x => x).then(x => x)
            console.log(data, status)
            if (data && data.status == 200 && data.success == true) {
                setshowAnimation(false)
               alert(data.message)
               datapost.cv="";
               datapost.description="";
               setImage(null);
            if(data.response&&data.response.application)
                    {
                                    // dispatch(Add_familyMember(data.response.member))

                    }
            }
            else {
                alert(data.message, "Error")
                setshowAnimation(false)
            }
        }
        catch(e)
        {
            setshowAnimation(false)

        }
        
    }


    
    const _renderItem = ({ item, index }) => {
        return <TouchableOpacity >
            <SliderEntry data={item} even={(index + 1) % 2 === 0} />
        </TouchableOpacity>;
    }
    return <Formik
    initialValues={{
        cv: '',
        description: '',
       
    
    }}
    validationSchema={DisplayingErrorMessagesSchema}
    onSubmit={async (values, { setSubmitting }) => {
    
        await postData(values)
    }}
    >
    {({ errors, touched, handleChange, handleBlur, values, handleSubmit, setFieldValue }) => {
        const pickImage = async () => {
            let result = await DocumentPicker.getDocumentAsync({
             
                base64: true,
            });
    
    
            if (!result.cancelled) {
                console.log(result.uri)
                setImage(result.uri)
                const options = { encoding: FileSystem.EncodingType.Base64 };
                // Read the audio resource from it's local Uri
                const data = await FileSystem.readAsStringAsync(result.uri, { encoding: FileSystem.EncodingType.Base64 });
                console.log(data)
                setFieldValue("cv",data);
            }
        };
       
       
       
       return <View style={[{ backgroundColor: 'white', flex: 1 }]}>
       <TopDrawer />
    
       <View style={[styles.ctr, styles.mt5]}>
           <ScrollView alwaysBounceVertical showsVerticalScrollIndicator={false} style={{ marginBottom: RFValue(138) }}>
               <Heading head={props.route && props.route.params && props.route.params.x?props.route.params.x.title:""} label="Apply now" />
    
               <Carousel
                   data={services}
                   renderItem={_renderItem}
                   sliderWidth={sliderWidth}
                   itemWidth={itemWidth}
                   inactiveSlideScale={1}
                   inactiveSlideOpacity={1}
                   enableMomentum={true}
                   activeSlideAlignment={'start'}
                   containerCustomStyle={styles.slider}
                   contentContainerCustomStyle={styles.sliderContentContainer}
                   removeClippedSubviews={false}
               />
           
               <Paragraph style={[styles.mt5, styles.mainpara]}>Description</Paragraph>
               {/* <Paragraph style={[styles.mainpara, { fontSize: 14 }]}>{product && product.description ? product.description : ""}</Paragraph> */}
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

                        <FAB
                            style={styles.fabupd}
                            small
                            icon="plus"
                            label="Upload CV"
                            onPress={() => pickImage()}
                        />
                        {touched.cv && errors.cv && <Text style={{ color: 'red', marginTop: 10 }}>{errors.cv}</Text>}
                    {
                        image!=null? <Avatar.Image size={100} style={{ alignSelf: 'center' }} source={{ uri: image }} />
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
                            /> : <Text style={styles.textTr, styles.themeColorwhite, { height: 30, textAlign: 'center', marginTop: 5, marginBottom: 5, color: 'white', fontSize: 18, fontFamily: 'PoppinsMedium', color: 'white' }}>Apply now</Text>
                            }
                        </TouchableOpacity>
           </ScrollView>
       </View>
    
    </View>
    
    }}
    </Formik>
}
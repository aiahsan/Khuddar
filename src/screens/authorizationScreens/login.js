import React,{useContext,useState,useEffect} from 'react';
import {Image,View,Text,TouchableOpacity,StyleSheet,Animated, Easing} from 'react-native'
import {Button,Appbar,TextInput,Checkbox } from 'react-native-paper';
import LoginBox from '../../components/authorizationComponents/loginBox';
import HeadingButton from '../../components/authorizationComponents/headingButton'
import SocialIcon from '../../components/authorizationComponents/socialIcons';
import AuthContext from '../../context/UserContext';
import { NavigationContainer } from '@react-navigation/native';
import DashBoardScreen from '../../screens/dashboardScreens/homeNavigation'
import LottiView from 'lottie-react-native';
const Login= () => {

 const authContext=useContext(AuthContext);
 const [showScreen, setScreen] = useState(true);
 const [animate, setanimate] = useState(false);
 const [animatationSource,setanimatationSource]=useState(require('../../animation/thumbanim1.json'));
 const [progress, setprogress] = useState(new Animated.Value(1));
 const [margin, setMargin] = useState(0);
 
 
 const MainScreen=(showMain)=>{
   if(showScreen==true)
   {
     return <><View style={{flex:1}}>
       <View style={{flex:1.5,justifyContent:'center',alignItems:'center'}}>
       <View>
       <Text style={{fontWeight:'700',fontSize:22,position:'relative',top:'600%'}}>
           KHUDDAR
         </Text>
       </View>
       <TouchableOpacity onPress={
       ()=>{
        //setMargin(-100);
        setanimatationSource(require('../../animation/10530-heart-animation.json'));
        setanimate(true)
        setTimeout(() => {
          setScreen(false);
        }, 600);
      }
     }>
        
       <LottiView source={animatationSource} resizeMode='cover' style={{width:250,marginTop:'25%',alignSelf:'center',marginLeft:margin}} progress={progress}  autoPlay={animate} /></TouchableOpacity>
    
       </View>
 
       <View style={{flex:1,justifyContent:'flex-end',alignItems:'center'}}>
         <Text style={{fontWeight:'700',fontSize:14,marginBottom:20}}>
           ABYKAN.InC
         </Text>
       </View>
 
 
       </View></>
   }
   else
   {
    return (
      
      (authContext.user!=null?<>
      <NavigationContainer>
          <DashBoardScreen/>
      </NavigationContainer>
      </>:<>
        <LoginBox color="#3799fe" title="SIGN UP" type="signup" />
        <LoginBox color="#fe3897" title="SIGN IN" type="signin"  />
        <View style={styles.container} >
        <HeadingButton color="#e8db4e" title="LOGIN" type="login"    />
        <SocialIcon></SocialIcon>
        </View>
        </>)
     
    );
   }
 }
   return <MainScreen />
  };

export default Login;

const styles=StyleSheet.create({
  container:{
    paddingLeft:'10%',
    paddingRight:'10%',
marginTop:30
  }

});
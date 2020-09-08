import React,{useContext,useState} from 'react';

import {StyleSheet} from 'react-native';
import {Button,Appbar,TextInput,Checkbox } from 'react-native-paper'
import AuthContext from '../../context/UserContext';
import {setUser} from '../../utilities/userAsyncFunctions';
import SigninnModel from '../../components/authorizationComponents/signinModal' 
import Modal from 'react-native-modal';


const headingButton= ({color,title,type}) => {
  const authContext=useContext(AuthContext);
  const [signinM,showSigning]=useState(false);


  function handleButton(type){

    switch(type){
  case 'signup':{
   break; 
  }
  case 'signin':{
    showSigning(true)
   break; 
  }
  case 'login':{
   const user={userName:'ahsan',name:'Ahsan Ismail',password:'123456789'};
    authContext.setUserstate(user);
    setUser(user);
    break; 
  }
}
  }
 return  <>
  <Modal   style={styles.modalContent}
     backdropColor = {'white'}
     backdropOpacity = {1}
     animationIn={'slideInUp'}
     animationInTiming={400}
      isVisible={signinM}>
    <SigninnModel />
  </Modal>
  <Button onPress={() => handleButton(type)}   mode="contained" labelStyle={styles.btnlbl} style={[styles.btnstl,{backgroundColor:color}]} >
  {title}
</Button>
 </>
}

export default headingButton;

const styles=StyleSheet.create({
    btnlbl:{fontSize:20,fontWeight:'bold'},
  btnstl:{height:40,borderRadius:10,fontSize:10},
  modalContent: {
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 4,
    borderColor: 'rgba(0, 0, 0, 0.1)',
    margin: 0
  },
});

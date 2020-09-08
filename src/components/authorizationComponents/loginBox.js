import React,{useContext} from 'react';
import {Image,View,Text,TouchableOpacity,StyleSheet} from 'react-native'
import {Button,Appbar,TextInput,Checkbox } from 'react-native-paper'
import HeadingButton from './headingButton';
import AuthContext from '../../context/UserContext';

const LoginButton= ({color,title,type}) => {
  
  
  return (
      <>
     <View style={styles.container} >
     <HeadingButton color={color} title={title} type={type}/>
  <View style={{marginTop:20}}>
  <TextInput
   theme={{ colors: { primary: color }}}
        label='Your Email'
        selectionColor='black'
        style={styles.txtinput}
      />
  
  <TextInput
   theme={{ colors: { primary: color }}}
        label='Your Password'
        selectionColor='black'
        style={styles.txtinput}
      />
      {type=="signup"?<>
      <TouchableOpacity style={styles.checkboxParent} >
      <Checkbox
        status='unchecked'
        onPress={() => {  }}
      />
      
      <Text style={{fontSize:10}}>Accept the <Text style={{color:'#3799fe'}}>Teems and Conditions</Text></Text>
      </TouchableOpacity>
      </>:<>
      <TouchableOpacity>
      <Text style={{fontSize:10,textAlign:'right',padding:10}}><Text style={{color:'#3799fe'}}>Forgot Password?</Text></Text>
      </TouchableOpacity>
      
      </>}
  </View>
  
     </View>
      </>
    );
  };

export default LoginButton;

const styles=StyleSheet.create({
  head:{width:'100%',height:50,backgroundColor:'white'},
  container:{
    paddingLeft:'10%',
    paddingRight:'10%',
marginTop:30
  },
  txtinput:{backgroundColor:'white',height:60},
  checkboxParent:{flex:1,flexDirection:'row',alignItems:'center',marginTop:20}
});
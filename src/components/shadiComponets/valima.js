import React,{useEffect,useState} from 'react';
import {Text,View,ScrollView} from 'react-native';
import {TextInput,Button} from 'react-native-paper';
import NikkaFiled from './textFiled';


export default function(){

 
    const [GroomName,setGroomName]=useState('');
    const [BrideName,setBrideName]=useState('');

      return<><View style={{marginLeft:'5%',marginRight:'5%'}}>
        <ScrollView>
        <Text style={{ fontFamily: 'Inter-Black',fontSize:30,color:'#0289a9' ,textAlign:'center'}}>Mubarak Ho</Text>

      
<NikkaFiled placeholder="Input Bride Name" label="Bride Name" value={BrideName} setText={setBrideName}/>
<NikkaFiled placeholder="Input Groom Name" label="Groom Name" value={GroomName} setText={setGroomName}/>

<Button style={{marginTop:'10%',backgroundColor:'#0289a9'}} mode="contained">Submit</Button>
        </ScrollView>
  </View></>

    }
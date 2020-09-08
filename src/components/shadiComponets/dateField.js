import * as React from 'react';
import {View,TextInput,Text} from 'react-native';
const MyComponent = ({label,name,placeholder,value,hasButtonHandler,onPress}) => {

  return (
  <View style={{flex:1,flexDirection:'row',backgroundColor:'#f1f2f5',padding:12,borderRadius:10,marginTop:10}}>
      <Text style={{flex:.5,marginTop:4,color:'#b8bfc8'}}>{label}</Text>
        <TextInput
      label="Email"
      value={value}
      onChangeText={text => onPress()}
placeholder={placeholder}
      style={{flex:1,color:'#697887'}}
      onFocus={()=>{

        onPress()

      }}
    />
  </View>
  );
};

export default MyComponent;
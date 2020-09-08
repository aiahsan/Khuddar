import React,{useState} from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import { TextInput } from 'react-native-paper';
import { Entypo } from '@expo/vector-icons';
import {Button} from 'react-native-paper'

export default function ({value,count,id,addItems,typeName}) {

    const [countS,setCountS]=useState(count);
    return (
        <View style={styles.Container}>
            <View style={{width:'50%'}}>
                <Text numberOfLines={1} ellipsizeMode='tail' >{value}</Text>
            </View>
            <View style={{width:'30%'}}>
                <TextInput value={countS} onChangeText={x=>setCountS(x)} keyboardType="number-pad" style={{ backgroundColor: 'white',marginLeft:20,maxWidth:40,height:20,borderRadius: 0,}}></TextInput>
            </View>
            <View style={{width:'20%'}}>
            <Button style={{marginTop:-5}} icon={()=>  <Entypo name="add-to-list" size={24} style={{marginLeft:20}} color="white" />} mode="contained" onPress={() =>addItems({
        typeName:typeName,
        name:value,
        quantity:countS,
        id:id,
    })
}>
   
  </Button>
                
            </View>
        </View>)

}

const styles = StyleSheet.create({
    Container: {
        
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginTop:15,
        borderBottomColor: '#aaaaaa',
        borderBottomWidth: .5,
        paddingBottom:10,
        paddingLeft:'5%',
        paddingRight:'5%',
        height:40
    }
})

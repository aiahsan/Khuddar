import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import { TextInput } from 'react-native-paper';
import { Entypo } from '@expo/vector-icons';
export default function ({value,count}) {

    return (
        <View style={styles.Container}>
            <View>
                <Text numberOfLines={1} ellipsizeMode='tail' style={{width:150}}>{value}</Text>
            </View>
            <View>
                <TextInput value={count} keyboardType="number-pad" style={{ backgroundColor: 'white',width:50,height:20,borderRadius: 0,}}></TextInput>
            </View>
            <View>
                <TouchableOpacity>
                <Entypo name="cross" size={24} color="black" />
                                </TouchableOpacity>
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
        paddingRight:'5%'
    }
})

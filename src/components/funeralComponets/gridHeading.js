import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import { TextInput } from 'react-native-paper'
export default function ({ title1, title2, title3 }) {

    return (
        <View style={styles.Container}>
            <View style={{width:'50%'}}>
                <Text style={{ ...styles.headingFont, width: 150 }}>{title1}</Text>
            </View>
            <View style={{width:'20%'}}>
                <Text style={styles.headingFont}>{title2}</Text>
            </View>
            <View style={{width:'30%'}}>
                <Text style={styles.headingFont}>{title3}</Text>
            </View>
        </View>)

}

const styles = StyleSheet.create({
    Container: {

        
        flexDirection: 'row',
        justifyContent: 'space-between',
        borderBottomColor: '#aaaaaa',
        borderBottomWidth: 1,
        paddingLeft: '5%',
        paddingRight: '5%',
        height:30
    },
    headingFont: {
        fontSize: 12,

        color: '#aaaaaa',
        fontWeight: 'bold',
        textAlign:'center'
    }
})

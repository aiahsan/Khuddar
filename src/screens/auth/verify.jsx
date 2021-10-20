import React from 'react';
import { View, Image, Text, ScrollView, SafeAreaView,TouchableOpacity } from 'react-native';
import { styles } from '../../styles/authStyles';
import { Button } from 'react-native-paper';
import { TextInput } from 'react-native-paper';
import { Ionicons } from '@expo/vector-icons';
import { AntDesign } from '@expo/vector-icons';
import { Feather } from '@expo/vector-icons';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import {useNavigation} from '@react-navigation/native';
import { Nav } from '../../navigation/navigationType'
import * as Animatable from 'react-native-animatable';
import {RFValue} from 'react-native-responsive-fontsize';

export default () => {
    const navigation=useNavigation();

    return <View style={{flex:1,backgroundColor:'white',justifyContent:'center'}}>
    <Animatable.View animation="fadeInLeft">
     <ScrollView showsVerticalScrollIndicator={false} style={{backgroundColor:'white'}}>
        <View style={styles.containerLeft}>
            <Image style={[styles.logo,{alignSelf:'center',marginBottom:RFValue(30)},styles.mt5,styles]} source={require('../../images/kdm.png')} />
            <Text style={[styles.mainTitleHead, styles.mt3]}><Text style={styles.themeColor}>F</Text><Text>orget</Text><Text style={styles.themeColor}> P</Text>assword</Text>
            <Text style={[styles.mainpara, styles.mnt1]}>Enter verification code</Text>
            
            <TextInput
                label="Security code"
                mode='outlined'
                style={[styles.textInput,styles.mt5]}
                left={
                    <TextInput.Icon
                    name={()=><MaterialCommunityIcons name="account-key" size={16}  style={[styles.themeColor,{paddingTop:'30%'}]} />}
                   
                  />
                  }            />
        
            <Button mode="contained" style={[styles.buttonMain, styles.mt5, styles.border1]} onPress={() => navigation.push(Nav.Changepassword)}>
                <Text style={styles.textTr,styles.themeColorwhite}> Verify</Text>
            </Button>
            <View style={{alignSelf:'center'}}>
            <TouchableOpacity onPress={() => console.log()}>
            <Text style={[styles.mainpara, styles.mt10]}>Resend <Text style={styles.themeColor}>Code</Text></Text>
           
                </TouchableOpacity>
            </View>
            
        </View>
    </ScrollView></Animatable.View>
    </View>
}
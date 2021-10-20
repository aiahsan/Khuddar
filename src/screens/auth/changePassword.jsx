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

    return   <View style={{flex:1,backgroundColor:'white',justifyContent:'center'}}>
    <Animatable.View animation="fadeInLeft">
    <ScrollView showsVerticalScrollIndicator={false} style={{backgroundColor:'white'}}>
        <View style={styles.containerLeft}>
            <Image style={[styles.logo,{alignSelf:'center',marginBottom:RFValue(30)},styles.mt5,styles]} source={require('../../images/kdm.png')} />
            <Text style={[styles.mainTitleHead, styles.mt3]}><Text style={styles.themeColor}>C</Text><Text>hange</Text><Text style={styles.themeColor}> P</Text>assword</Text>
            <Text style={[styles.mainpara, styles.mnt1]}>Enter new password</Text>
            
            <TextInput
                label="Password"
                mode='outlined'
                style={[styles.textInput,styles.mt5]}
                left={
                    <TextInput.Icon
                    name={()=><MaterialCommunityIcons name="lock" size={16}  style={[styles.themeColor,{paddingTop:'30%'}]} />}
                   
                  />
                  }            />

            <TextInput
                label="Confirm Password"
                mode='outlined'
                style={[styles.textInput,styles.mt3]}
                left={
                    <TextInput.Icon
                    name={()=><MaterialCommunityIcons name="lock" size={16}  style={[styles.themeColor,{paddingTop:'30%'}]} />}
                   
                  />
                  }
            />
            <Button mode="contained" style={[styles.buttonMain, styles.mt5, styles.border1]} onPress={() => console.log()}>
                <Text style={styles.textTr,styles.themeColorwhite}> Change Password</Text>
            </Button>
            <View style={{alignSelf:'center'}}>
            <TouchableOpacity onPress={() => navigation.push(Nav.Login)}>
            <Text style={[styles.mainpara, styles.mt10]}>Have an account? <Text style={styles.themeColor}>Login</Text></Text>
            
                </TouchableOpacity>
            </View>
            
        </View>
    </ScrollView>
    </Animatable.View>
  
  </View>
}
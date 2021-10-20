import React from 'react';
import {View,Text,TouchableOpacity} from 'react-native'
import { MaterialCommunityIcons } from '@expo/vector-icons';
import {styles} from '../../../styles/authStyles'
import { RFValue } from 'react-native-responsive-fontsize';
export default ({icon,callBack,title})=>{
  return  <TouchableOpacity onPress={()=>callBack()}>
       <View style={[styles.ctr,styles.mt5,styles.felxRow]}>
<MaterialCommunityIcons name={icon} size={24} color="#566956" />
<Text style={[styles.mainTitleHead1,styles.themeColorwhite,styles.PoppinsLight,{marginLeft:RFValue(20),fontSize:14}]}>{title}</Text>
  </View>
  </TouchableOpacity>
}
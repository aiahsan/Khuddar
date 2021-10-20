import React from 'react';
import { DrawerContentScrollView} from '@react-navigation/drawer';
import {View,Text,ScrollView} from 'react-native'
import ProfileImage from './profileImage';
import { Avatar } from 'react-native-paper';
import DrawerItem from './drawerItem'
import {styles} from '../../../styles/authStyles'
import { RFPercentage,RFValue } from 'react-native-responsive-fontsize';
import {useDispatch} from 'react-redux'
import {LogOut} from '../../../redux/actions/userActionMethodes'
export default (props)=>{
  const dispatch=useDispatch();
  const handleLogOut=()=>{
      dispatch(LogOut())
  }

     return (
        <View style={{flex: 1}}>
            <ScrollView {...props}>
         <View style={[styles.ctr,styles.felxRow,styles.mt10,{borderBottomWidth:1,borderBottomColor: "#b0b0b08c",paddingBottom:RFValue(25)}]}>
         <ProfileImage/>
         <View style={[styles.mt5,styles.ctr]}>
             <Text style={[styles.mainTitleHead1,styles.themeColorwhite]}>Rexandra</Text>
             <Text style={[styles.mainpara,styles.themeColorwhite,styles.mntp10]}>rexandra@email.com</Text>
         </View>
         </View>
          <DrawerItem icon="home" title="Home" callBack={()=>console.log()} />
          <DrawerItem icon="shopping" title="Products" callBack={()=>console.log()} />
          <DrawerItem icon="account" title="Profile" callBack={()=>console.log()} />
          <DrawerItem icon="view-list" title="Category" callBack={()=>console.log()} />
          <DrawerItem icon="cart" title="Orders" callBack={()=>console.log()} />
          <DrawerItem icon="settings" title="Settings" callBack={()=>console.log()} />
         
         

        </ScrollView>
        <View style={{position:'absolute',bottom:RFValue(10),borderTopWidth:1,borderTopColor: "#b0b0b08c",width:'100%'}}>
        <DrawerItem icon="logout-variant" title="Log out" callBack={handleLogOut} />

        </View>
        </View>
      );
}
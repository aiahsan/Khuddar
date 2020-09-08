import React,{useEffect} from 'react';
import {View,Text,BackHandler, Alert } from 'react-native'
import { useBackHandler } from '@react-native-community/hooks'

export default function ()
{

    const backAction = () => {
        Alert.alert("Hold on!", "Are you sure you want to go back?", [
          {
            text: "Cancel",
            onPress: () => null,
            style: "cancel"
          },
          { text: "YES", onPress: () => BackHandler.exitApp() }
        ]);
        return true;
      };
    
      useEffect(() => {
        BackHandler.addEventListener("hardwareBackPress", backAction);
    
        return () =>
          BackHandler.removeEventListener("hardwareBackPress", backAction);
      }, []);
    
    return(<>
    <View>
        <Text>
            Signin Modal field will be set according to requiremnts
        </Text>
    </View>
    </>)
}
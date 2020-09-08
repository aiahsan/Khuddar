import React from 'react';
import {Image,View,Text,TouchableOpacity} from 'react-native'
import { createStackNavigator } from '@react-navigation/stack';

//screen Components
import FirstScreen from '../../components/authenticationComponets/firstScreen';
import Login from '../../components/authenticationComponets/loginComp';
import Registaration from '../../components/authenticationComponets/registationCom';



const Stack=createStackNavigator();
const AuthScrren= () => {
    return (
      <>
        <Stack.Navigator   initialRouteName="FirstScreen">
            <Stack.Screen name="FirstScreen" component={FirstScreen}/>
            <Stack.Screen name="Login" component={Login}/>
            <Stack.Screen name="Registaration" component={Registaration}/>
        </Stack.Navigator>
      </>
    );
  };

export default AuthScrren;


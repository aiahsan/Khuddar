import * as React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { createNativeStackNavigator } from 'react-native-screens/native-stack';
import Welcome from '../screens/auth/welcome';
import Login from '../screens/auth/login';
import Signup from '../screens/auth/signup';
import Forgot from '../screens/auth/forgot';
import Verify from '../screens/auth/verify';
import ChangePassword from '../screens/auth/changePassword';
import Memberlogin from '../screens/auth/memberlogin';
import Otp from '../screens/auth/otp';
import {Nav} from '../navigation/navigationType';
const Stack = createNativeStackNavigator();
Stack.Navigator.defaultProps = {
  headerMode: 'none',
};
const Drawer = createDrawerNavigator();

export default function App() {
    return (
        <Stack.Navigator  screenOptions={{headerShown: false,}} initialRouteName="Welcome" >
          <Stack.Screen name={Nav.Welcome} component={Welcome} />
          <Stack.Screen name={Nav.Login} component={Login} />
          <Stack.Screen name={Nav.Signup} component={Signup} />
          <Stack.Screen name={Nav.Forgot} component={Forgot} />
          <Stack.Screen name={Nav.Verify} component={Verify} />
          <Stack.Screen name={Nav.Changepassword} component={ChangePassword} /> 
          <Stack.Screen name={Nav.Memberlogin} component={Memberlogin} /> 
          <Stack.Screen name={Nav.OTP} component={Otp} /> 
        </Stack.Navigator>
      );
    
}
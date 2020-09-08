import React,{useEffect,useState} from 'react';
import { StyleSheet, Text, View,AsyncStorage } from 'react-native';
import Splash from './Splash/Splash';
import Login from './authorizationScreens/login';
import UserContext from '../context/UserContext';
import {getUser,setUser} from '../utilities/userAsyncFunctions';
export default function App() {

  [splashS,hideSplash]=useState(false);
  
  [user,setUserstate]=useState(null);
  useEffect(async () => {
    const user=  await AsyncStorage.getItem('user');
    setUserstate(user);
      const timer = setTimeout(() => {
          hideSplash(true)
      }, 7200);
    return () => clearTimeout(timer);
  }, []);
  return (
    (splashS==false?<Splash/>:<UserContext.Provider value={{user,setUserstate}}><Login /></UserContext.Provider>)
   
  );
}


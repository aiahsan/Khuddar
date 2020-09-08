import React,{useContext} from 'react';
import { AsyncStorage } from 'react-native';
import {setUserNull,setUser} from '../utilities/userAsyncFunctions'
import AuthContext from '../context/UserContext'
export  async function LogOut(){
    const authContext=useContext(AuthContext);


}
export  async function Login(user){
    const authContext=useContext(AuthContext);

    authContext.setUserstate(user);
    setUser(user);

}
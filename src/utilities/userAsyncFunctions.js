import React from 'react';
import { AsyncStorage } from 'react-native';

export async function getUser(){

try{
const User=await AsyncStorage.getItem('user');
return JSON.parse(User)
}
catch
{
    return null;
}

}
export async function setUser(user){

try{
await AsyncStorage.setItem('user',JSON.stringify(user));
return User;
}
catch
{
return null;
}

}

export async function setUserNull(){

    try{
    await AsyncStorage.removeItem('user');
    }
    catch
    {
    }
    
    }
import types from '../actions/types'
import AsyncStorage from '@react-native-async-storage/async-storage';

export const userReducer = (state =null, action) => {
    if (action.type == types.signIn) {
     
        return action.payload
    }

    else if (action.type == types.updateProfile) {
        return action.payload
    }
    else if (action.type == types.logOut)
      {
        return null;}
    return state;
}

export const ProfileUpdate=(state=false,action)=>
{
    if (action.type == types.setProfileUpdate) {
     
        return action.payload
    }
    return state;
}
export const userLanguage = (state = null, action) => {
    return state;
}

export const userLocation = (state = null, action) => {

    return state;
}

export const systemLanguages = (state = null, action) => {
  
    return state;
}

export const userAddresses = (state = [], action) => {
    return state;
}

export const fcmToken = (state = null, action) => {
    if (action.type == types.saveToken) {
        return action.payload
    }
    else if (action.type == types.logOut)
        return null;
    return state;
}
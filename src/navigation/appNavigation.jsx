import React from 'react';
import AuthNav from './authstackNavigation';
import LoginUserStack from './drawernavigation';
import {useSelector} from 'react-redux';
export default ()=>{
    const user = useSelector(e => e.userReducer)
    console.log(user)
    if(user!=null)
    {
        return <LoginUserStack/>
    }
    return <AuthNav/>
}
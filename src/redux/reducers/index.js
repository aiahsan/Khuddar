import {combineReducers} from 'redux';
import {userReducer,userLanguage,userLocation,systemLanguages,userAddresses,fcmToken,ProfileUpdate} from './user';
import {familyMembers,services} from '../reducers/family'
import {martItems} from '../reducers/mart'
import {emartItems} from '../reducers/emart'
import {jobsItems} from '../reducers/jobs'
import {cart} from '../reducers/cart'
import {ecart} from '../reducers/ecart'
import {news} from '../reducers/news'
import {blogs} from '../reducers/blogs'
import {opd_categories} from '../reducers/opd'

export default combineReducers({
    userReducer,
    userLanguage,
    systemLanguages,
    userLocation,
    userAddresses,
    fcmToken,
    familyMembers,
    martItems,
    jobsItems,
    services,
    cart,
    news,
    blogs,
    ProfileUpdate,
    ecart,
    emartItems,
    opd_categories
  });
  


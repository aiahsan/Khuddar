import React from 'react';
import {Dimensions} from 'react-native'
import { Avatar } from 'react-native-paper';
import {styles} from '../../../styles/authStyles';
import {RFPercentage,RFValue} from 'react-native-responsive-fontsize'
const dimension=Dimensions.get('window');
const MyComponent = () => (
  <Avatar.Image size={dimension.width/5}  source={{uri:'https://st3.depositphotos.com/4111759/13425/v/600/depositphotos_134255626-stock-illustration-avatar-male-profile-gray-person.jpg'}} />
);
export default MyComponent

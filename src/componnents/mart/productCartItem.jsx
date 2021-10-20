import * as React from 'react';
import { View, Image, Text, TouchableOpacity } from 'react-native'
import { Avatar, Button, Card, Title, Paragraph } from 'react-native-paper';
import { styles } from '../../styles/authStyles';
import { RFPercentage, RFValue } from "react-native-responsive-fontsize";
import Chip from '../home/chip'
import {FontAwesome,Entypo} from '@expo/vector-icons';

const LeftContent = props => <Avatar.Icon {...props} icon="folder" />
import { useNavigation } from '@react-navigation/native';
const MyComponent = ({ handlefav, fav, img, title, desc, unit, price, type, discounted_price, onIncrease, onDecrease, flag, quantity, removeCartItem }) => {
  // const navigation = useNavigation();
  return (

    <View style={{justifyContent:'flex-end',alignItems:'flex-end'}}>
    {flag ? <>
            <View style={{ flexDirection: 'row',justifyContent: 'flex-end', alignItems: 'flex-end'  }}>
              <TouchableOpacity style={{ paddingRight: 10 }} onPress={() => onDecrease()} >
                <Text style={[styles.themeBackColor, { color: 'white', padding: 5, borderRadius: 5 }, styles.PoppinsMedium]}><Entypo name="minus" size={14} color="white" /></Text>
              </TouchableOpacity>
              <Text style={styles.themeColor1}>{quantity ? quantity : 0}</Text>
              <TouchableOpacity style={{ paddingLeft: 10 }} onPress={() => onIncrease()} >
                <Text style={[styles.themeBackColor, { color: 'white', padding: 5, borderRadius: 5 }, styles.PoppinsMedium]}><Entypo name="plus" size={14} color="white" /></Text>
              </TouchableOpacity>
            </View>
          </> : <TouchableOpacity onPress={() => onIncrease()}>
              <Text style={[styles.themeBackColor, { color: 'white', paddingTop: 5, paddingBottom: 5, paddingLeft: 20, paddingRight: 20, borderRadius: 5 }, styles.PoppinsMedium]}>Add</Text>
            </TouchableOpacity>}
    </View>
  );

}

export default MyComponent;
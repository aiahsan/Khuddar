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
    console.log(quantity)
    return (
  
      <View style={{ marginBottom: 10, marginTop: 10, flex: 1, flexDirection: 'row', justifyContent: 'flex-start', borderBottomWidth: 1, paddingBottom: 10, borderBottomColor: '#d9d9d9' }}>
  
        <View style={[{ position: 'absolute', right: 0 }]}>
         <View >
         
          {flag ?
            <TouchableOpacity onPress={() => removeCartItem()}>
              <Entypo name="circle-with-cross" size={24} style={styles.themeColor} />
            </TouchableOpacity>
  
            : <></>}
         </View>
        </View>
  
  
        <View>
          <Avatar.Image size={65} style={{ marginTop: RFValue(10), marginRight: RFValue(20) }} source={{ uri: img }} />
        </View>
        <View>
          <Text style={[styles.mainTitleHead1]}>{title}</Text>
          <Text style={[styles.mainpara, { marginTop: RFValue(-8) }]}>{desc}</Text>
          <Text style={[styles.mainpara, { marginTop: RFValue(-6) }]}>{unit}</Text>
        
          <View style={styles.productbtn}>
            <Text style={[styles.mainpara, { fontFamily: 'PoppinsMedium', fontSize: 14, lineHeight: 30 }]}><Text style={[discounted_price != price ? { textDecorationLine: 'line-through', textDecorationStyle: 'solid' } : {}]}>{discounted_price != price ? "$" + price : ""}</Text><Text style={{ fontSize: 22 }}>${discounted_price}</Text></Text>
            <View style={{ marginTop: RFValue(-10), justifyContent: 'flex-end', alignItems: 'flex-end' }}>
              {flag ? <>
                <View style={{ flexDirection: 'row' }}>
                  <TouchableOpacity style={{ paddingRight: 10 }} onPress={() => onDecrease()} >
                    <Text style={[styles.themeBackColor, { color: 'white', padding: 5, borderRadius: 5 }, styles.PoppinsMedium]}><Entypo name="minus" size={14} color="white" /></Text>
                  </TouchableOpacity>
                  <Text style={styles.themeColor1}>{quantity ? quantity : 0}</Text>
                  <TouchableOpacity style={{ paddingLeft: 10 }} onPress={() => onIncrease()} >
                    <Text style={[styles.themeBackColor, { color: 'white', padding: 5, borderRadius: 5 }, styles.PoppinsMedium]}><Entypo name="plus" size={14} color="white" /></Text>
                  </TouchableOpacity>
                </View>
              </> : <TouchableOpacity onPress={() => onIncrease()}>
                  <Text style={[styles.themeBackColor, { color: 'white', paddingTop: 5, paddingBottom: 5, paddingLeft: 20, paddingRight: 20, borderRadius: 5 }, styles.PoppinsMedium]}>{Language.Add}</Text>
                </TouchableOpacity>}
            </View>
            <TouchableOpacity  onPress={() => handlefav()}>
            {fav == true ? <FontAwesome name="heart" size={22} style={[styles.themeColor,{marginTop:10}]} />
              : <FontAwesome name="heart-o" size={22} color="#a7a7a7"  style={{marginTop:10}}/>
            }
          </TouchableOpacity>
          </View>
        </View>
      </View>
    );
  
  }
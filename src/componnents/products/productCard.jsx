import * as React from 'react';
import { View, Image, Text,TouchableOpacity } from 'react-native'
import { Avatar, Button, Card, Title, Paragraph } from 'react-native-paper';
import { styles } from '../../styles/authStyles';
import { RFPercentage, RFValue } from "react-native-responsive-fontsize";
import Chip from '../home/chip'
import { Entypo } from '@expo/vector-icons';
const LeftContent = props => <Avatar.Icon {...props} icon="folder" />
import { useNavigation } from '@react-navigation/native';

const MyComponent = ({ img, title, desc, unit, price, quanity }) =>
{
  const navigation = useNavigation();
return (
  
  <View style={{ marginBottom: 10, marginTop: 10, flex: 1, flexDirection: 'row', justifyContent: 'flex-start', borderBottomWidth: 1, paddingBottom: 10, borderBottomColor: '#d9d9d9' }}>
   
    <View>
      <Image source={{ uri: img }} style={styles.productImage} />
    </View>
    <View>
      <Text style={[styles.mainTitleHead1]}>{title}</Text>
      <Text style={[styles.mainpara, { marginTop: RFValue(-8) }]}>{desc}</Text>
      <Text style={[styles.mainpara, { marginTop: RFValue(-6) }]}>{unit}</Text>
      <View style={styles.productbtn}>
        <Text style={[styles.mainpara, { fontFamily: 'PoppinsMedium', fontSize: 14 }]}>${price}</Text>
     {quanity?   <View style={{ marginTop: RFValue(-10),marginRight:RFPercentage(2.5) }}>
        <Text>Quantity: {quanity}</Text>
        </View>:<></>}
      </View>
    </View>
  </View>
);

}

export default MyComponent;
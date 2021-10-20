import * as React from 'react';
import { ScrollView, View, TouchableOpacity,StyleSheet,Text } from 'react-native'
import { StatusBar } from 'expo-status-bar';

import { styles } from '../../../../styles/authStyles';
import { useNavigation } from '@react-navigation/native';
import TopDrawer from '../../../../componnents/auth/drawer/topDrawer';
import Heading from '../../../../componnents/home/headingComp'
import {RFPercentage, RFValue} from 'react-native-responsive-fontsize';
import ServiceCard from '../../../../componnents/home/serviceCard';
import {Nav} from '../../../../navigation/navigationType'
const MyComponent = () => {

    let [page, setPage] = React.useState({});
    const navigation = useNavigation();
    const handleChange = (id) => {      
    }
    return ( <View style={[{backgroundColor:'white',flex:1}]}>
        <TopDrawer/>
<View style={styles.ctr}>
<ScrollView alwaysBounceVertical showsVerticalScrollIndicator={false} >
    <View style={{marginTop:RFValue(20)}}>
    <Heading head="Khuddar Saloon" label="Please choose your service" type={true}  />
    <View style={{display:'flex',flexDirection:'row',justifyContent:'space-evenly',alignItems:'center',marginTop:RFValue(15),marginBottom:RFValue(15)}}>
    <ServiceCard islock={true} src={require('../../../../images/services/f19.png')} onPress={()=>{navigation.navigate(Nav.SaloonSelected)}} title="My Saloon" />
    <ServiceCard islock={true} src={require('../../../../images/services/f19.png')}  onPress={()=>{navigation.navigate(Nav.SaloonList)}} title="List Saloon" />
    </View>
    <View style={{display:'flex',flexDirection:'row',justifyContent:'space-evenly',alignItems:'center',marginTop:RFValue(15),marginBottom:RFValue(15)}}>
    <ServiceCard islock={true} src={require('../../../../images/services/f24.png')} onPress={()=>{navigation.navigate(Nav.Saloon)}} title="Saloon Details" />

    </View>
    </View>
    </ScrollView>
  
</View>
    
    </View>);
};


export default MyComponent;
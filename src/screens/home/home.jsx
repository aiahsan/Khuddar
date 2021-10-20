import * as React from 'react';
import { ScrollView, View, TouchableOpacity, StyleSheet, Text } from 'react-native'
import { StatusBar } from 'expo-status-bar';

import { styles } from '../../styles/authStyles';
import { useNavigation } from '@react-navigation/native';
import TopDrawer from '../../componnents/auth/drawer/topDrawer';
import Heading from '../../componnents/home/headingComp'
import { RFPercentage, RFValue } from 'react-native-responsive-fontsize';
import ServiceCard from '../../componnents/home/serviceCard';
import { Nav } from '../../navigation/navigationType';
import { repository } from '../../utiles/repository';
import {useSelector} from 'react-redux'
import ContentLoader from "react-native-easy-content-loader";

const MyComponent = () => {

    let [page, setPage] = React.useState({});
    let ProfileUpdate=useSelector(x=>ProfileUpdate);
    const navigation = useNavigation();
    const handleChange = (id) => {
    }
    let [showAnimation, setshowAnimation] = React.useState(false);

    // React.useEffect(()=>{
    //     setshowAnimation(true);
    //     if(ProfileUpdate && ProfileUpdate==true)
    //     setshowAnimation(false);
    //     else
    //     navigation.navigate(Nav.Profile);
    // },[])
    return (showAnimation==true? Array.from([1, 2, 3,4,5], x =><ContentLoader  
        pRows={1}
        tHeight={100}
        pHeight={10}
        tWidth="100%"
        pWidth="100%"
        titleStyles={{marginTop:5}}
              listSize={1}
              active
              secondaryColor="rgba(207, 207, 207,1)"
        /> ):<View style={[{ backgroundColor: 'white', flex: 1 }]}>
        <TopDrawer />
        <View style={styles.ctr}>
            <ScrollView alwaysBounceVertical showsVerticalScrollIndicator={false} style={{ marginBottom: RFValue(138) }}>

                <View style={{ marginTop: RFValue(20) }}>
                    <Heading head="Welcome User" label="Please choose your service" type={true} />

                    {/* <Heading head="Family" label="" type={true}  />
    
    <View style={{display:'flex',flexDirection:'row',justifyContent:'space-evenly',alignItems:'center',marginTop:RFValue(15)}}>
    <ServiceCard src={require('../../images/home/f1.png')} islock={true} onPress={()=>{navigation.navigate(Nav.FamilyHome)}} title="Family" />
    </View> */}
                    <Heading head="Zaruriyat" label="" type={true} />
                    <View style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-evenly', alignItems: 'center', marginTop: RFValue(15) }}>
                        <ServiceCard src={require('../../images/home/f3.png')} islock={true} onPress={() => { navigation.navigate(Nav.MartHome) }} title="Mart" />
                        <ServiceCard src={require('../../images/home/f6.png')} islock={true} onPress={() => { navigation.navigate(Nav.Funrel) }} title="Funeral" />

                    </View>

                    <View style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-evenly', alignItems: 'center', marginTop: RFValue(15) }}>
                        {/* <ServiceCard src={require('../../images/home/f2.png')} islock={true} title="Services" onPress={()=>navigation.navigate(Nav.ServicesHome)} /> */}
                        {/* <ServiceCard src={require('../../images/home/f5.png')} islock={true} onPress={()=>{navigation.navigate(Nav.Jobs)}} title="Jobs" /> */}

                        <ServiceCard src={require('../../images/home/f2.png')} islock={true} title="Services" onPress={() => navigation.navigate(Nav.ServicesHome)} />
                        <ServiceCard src={require('../../images/home/f12.png')} islock={true} title="OPD" onPress={() => { navigation.navigate(Nav.OPDHome) }} />

                        {/* <ServiceCard src={require('../../images/home/f5.png')} islock={true} onPress={() => { navigation.navigate(Nav.Jobs) }} title="Jobs" /> */}

                    </View>
                    <Heading head="Rozgar" label="" type={true} />
                    <View style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-evenly', alignItems: 'center', marginTop: RFValue(15) }}>
                        <ServiceCard src={require('../../images/home/f7.png')} islock={true} title="Business" onPress={() => { navigation.navigate(Nav.Business) }} />
                        <ServiceCard src={require('../../images/home/f5.png')} islock={true} onPress={() => { navigation.navigate(Nav.Jobs) }} title="Jobs" />

                    </View>
                    <View style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-evenly', alignItems: 'center', marginTop: RFValue(15) }}>
                    <ServiceCard src={require('../../images/home/f8.png')} islock={true} title="Affiliation" onPress={() => { navigation.navigate(Nav.Affilation) }} />
                    <ServiceCard src={require('../../images/home/f14.png')} islock={true} title="E-commerce" onPress={() => { navigation.navigate(Nav.EMartHome) }} />

                    </View>
                    <Heading head="Pese Kamao" label="" type={true} />
                    <View style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-evenly', alignItems: 'center', marginTop: RFValue(15) }}>
                    <ServiceCard src={require('../../images/home/f9.png')} title="Games" />
                    <ServiceCard src={require('../../images/home/f10.png')} islock={true} onPress={() => { navigation.navigate(Nav.Videos) }} title="videos" />
                </View>

                    <View style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-evenly', alignItems: 'center', marginTop: RFValue(15) }}>
                        {/* <ServiceCard src={require('../../images/home/f12.png')} islock={true} title="OPD" onPress={() => { navigation.navigate(Nav.OPD) }} /> */}
                        <ServiceCard src={require('../../images/home/f4.png')} islock={true} title="Quiz" onPress={() => { navigation.navigate(Nav.Quiz) }} />

                        {/* <ServiceCard src={require('../../images/home/f11.png')} islock={true} onPress={() => { navigation.navigate(Nav.MartHome) }} title="E-Commerce " /> */}
                    </View>

                </View>
                <Heading head="Tafreeh" label="" type={true} />
                
                <View style={{ display: 'flex', flexDirection: 'row', justifyContent: 'flex-start', alignItems: 'flex-start', marginTop: RFValue(15) }}>
                <ServiceCard src={require('../../images/home/f13.png')} islock={true}  onPress={() => { navigation.navigate(Nav.News) }} title="News" />

                </View>
                <View style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-evenly', alignItems: 'center', marginTop: RFValue(15) }}>
                    {/* <ServiceCard src={require('../../images/home/f7.png')} islock={true} title="Business" onPress={()=>{navigation.navigate(Nav.Business)}} /> */}
                </View>
                {/* <View style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-evenly', alignItems: 'center', marginTop: RFValue(15) }}>
                    <ServiceCard src={require('../../images/home/f9.png')} title="Games" />
                    <ServiceCard src={require('../../images/home/f10.png')} islock={true} onPress={() => { navigation.navigate(Nav.Videos) }} title="videos" />
                </View> */}

            </ScrollView>

        </View>

    </View>);
};


export default MyComponent;
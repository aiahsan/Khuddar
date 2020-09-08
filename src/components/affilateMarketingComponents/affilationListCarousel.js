import React from 'react';
import {View,Text,StyleSheet,Dimensions} from 'react-native';
import Carousel from 'react-native-carousel'
import BackgroundCard from './backgroundCard';
export default function()
{

    return <>
     <Carousel delay={40000} width={375} indicatorOffset={0}>
        <View style={styles.container}>
          <BackgroundCard/>
        </View>
        <View style={styles.container}>
        <BackgroundCard/>       
         </View>
        <View style={styles.container}>
        <BackgroundCard/>
        </View>
      </Carousel>
    </>
}

var styles = StyleSheet.create({
    container: {
      width: 375,
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: '#ffffff',
    },
  });
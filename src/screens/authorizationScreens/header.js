import React, { Component } from 'react';
import { View, TouchableOpacity, StyleSheet, Image } from 'react-native';
import { Appbar, Avatar,  Provider, Text } from 'react-native-paper';
import { useNavigation, useRoute } from '@react-navigation/native'
import { Ionicons } from '@expo/vector-icons';
import AppMenu from './menuComponent'
export default Header = () => {
     const navigation = useNavigation();
     const Route = useRoute();
     return (
          <>
          
          <Appbar.Header statusBarHeight={0} style={{ backgroundColor: 'white' }} >
               <View style={[{ justifyContent: 'space-between', flexDirection: 'row', flex: 1, alignItems: 'center', paddingLeft: 10 }]}>
                    {(Route.params.title != "Wallet" ? <TouchableOpacity onPress={() => { navigation.goBack() }}>
                    <View style={{ flex: 1, flexDirection: 'row', width: 80, alignItems: 'center' }}>
                                    <View style={{ flex: 1 }}>
                                          <Ionicons name="ios-arrow-back" size={24} color="black" />
                                    </View>
                                    <View style={{ flex: 1 }}>
                                          <Text style={{ fontWeight: 'bold', color: 'black', marginLeft: -25 }}>Back</Text>

                                    </View>
                              </View>
                    </TouchableOpacity> : <View></View>)}
                    <View style={[(Route.params.title == "Wallet"?{}:{marginLeft:'-12%'})]}  >
                         <Text style={{ textAlign: "center", fontWeight: 'bold', fontSize: 15 }}>{Route.params.title}</Text>
                    </View>
                    <View  >

                   <AppMenu/>
                    
                        
                    
                    </View>
               </View>
               
               
          </Appbar.Header>
         
     </>
     );

}


/*
                          <Image source={require('../../icons/logo.jpg')} />

*/
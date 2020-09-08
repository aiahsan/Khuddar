import React,{Component,useState} from 'react';
import { View, TouchableOpacity, StyleSheet, Image } from 'react-native';
import Header from '../authorizationScreens/header';
import {useNavigation} from '@react-navigation/native'
import { Appbar, Avatar, Menu, Provider , Text } from 'react-native-paper';
import Modal from 'react-native-modal'

export default dashboardButton = ({imgUri,title},props) => {
    const navigation = useNavigation();
    return (<>
     <Header/>



        <View style={styles.content}>
            <TouchableOpacity style={styles.obj}   onPress={()=>navigation.push("BuyWithProfitScreens")}>
                <View style={{flex:1}} >
                    <View style={{flex:2,justifyContent:'center',alignItems:'center',paddingBottom:'10%'}}>
                    <Image style={styles.tinyLogo} source={require('../../icons/1.png')} ></Image>
                    </View>
                    <View style={styles.titleContianer}>
                        {props.wordbreak == false ? <Text style={{
                            fontWeight: 'bold', alignSelf: 'stretch',
                            textAlign: 'center'
                        }}>{title}</Text>
                            : <Text style={styles.titleContent}>Buy with Profit</Text>}
                    </View>
                </View>
            </TouchableOpacity>
            <TouchableOpacity style={styles.obj}  onPress={()=>navigation.push("WinForCash")}  >
                <View style={{flex:1}} >
                    <View style={{flex:2,justifyContent:'center',alignItems:'center',paddingBottom:'10%'}}>
                    <Image style={styles.tinyLogo} source={require('../../icons/2.png')} ></Image>
                    </View>
                    <View style={styles.titleContianer}>
                        {props.wordbreak == false ? <Text style={{
                            fontWeight: 'bold', alignSelf: 'stretch',
                            textAlign: 'center'
                        }}>{title}</Text>
                            : <Text style={styles.titleContent}>win for cash</Text>}
                    </View>
                </View>
            </TouchableOpacity>

</View>   
    
      
        <View style={styles.content}>
            <TouchableOpacity style={styles.obj} >
                <View style={{flex:1}} >
                    <View style={{flex:2,justifyContent:'center',alignItems:'center',paddingBottom:'10%'}}>
                    <Image style={styles.tinyLogo} source={require('../../icons/3.png')} ></Image>
                    </View>
                    <View style={styles.titleContianer}>
                        {props.wordbreak == false ? <Text style={{
                            fontWeight: 'bold', alignSelf: 'stretch',
                            textAlign: 'center'
                        }}>{title}</Text>
                            : <Text style={styles.titleContent}> play for enjoy </Text>}
                    </View>
                </View>
            </TouchableOpacity>
            <TouchableOpacity style={styles.obj} >
                <View style={{flex:1}} >
                    <View style={{flex:2,justifyContent:'center',alignItems:'center',paddingBottom:'10%'}}>
                    <Image style={styles.tinyLogo} source={require('../../icons/4.png')} ></Image>
                    </View>
                    <View style={styles.titleContianer}>
                        {props.wordbreak == false ? <Text style={{
                            fontWeight: 'bold', alignSelf: 'stretch',
                            textAlign: 'center'
                        }}>{title}</Text>
                            : <>
                            <Text style={styles.titleContent}>Success</Text>
                            <Text style={{...styles.titleContent,paddingTop:6}}>with development</Text>
                            
                            </>}
                    </View>
                </View>
            </TouchableOpacity>

</View>   
    
      
        <View style={styles.content}>
            <TouchableOpacity style={styles.obj} onPress={()=>navigation.push("ShadiMubarak")} >
                <View style={{flex:1}} >
                    <View style={{flex:2,justifyContent:'center',alignItems:'center',paddingBottom:'10%'}}>
                    <Image style={styles.tinyLogo} source={require('../../icons/5.png')} ></Image>
                    </View>
                    <View style={styles.titleContianer}>
                        {props.wordbreak == false ? <Text style={{
                            fontWeight: 'bold', alignSelf: 'stretch',
                            textAlign: 'center'
                        }}>{title}</Text>
                            : <Text style={styles.titleContent}>shadi mubarak</Text>}
                    </View>
                </View>
            </TouchableOpacity>
            <TouchableOpacity style={styles.obj} >
                <View style={{flex:1}} >
                    <View style={{flex:2,justifyContent:'center',alignItems:'center',paddingBottom:'10%'}}>
                    <Image style={styles.tinyLogo} source={require('../../icons/6.png')} ></Image>
                    </View>
                    <View style={styles.titleContianer}>
                        {props.wordbreak == false ? <Text style={{
                            fontWeight: 'bold', alignSelf: 'stretch',
                            textAlign: 'center'
                        }}>{title}</Text>
                            : <Text style={styles.titleContent}> happy management</Text>}
                    </View>
                </View>
            </TouchableOpacity>

</View>   
    
      
        <View style={styles.content}>
            <TouchableOpacity style={styles.obj} onPress={()=>navigation.push('Affilation')} >
                <View style={{flex:1}} >
                    <View style={{flex:2,justifyContent:'center',alignItems:'center',paddingBottom:'10%'}}>
                    <Image style={styles.tinyLogo} source={require('../../icons/7.png')} ></Image>
                    </View>
                    <View style={styles.titleContianer}>
                        {props.wordbreak == false ? <Text style={{
                            fontWeight: 'bold', alignSelf: 'stretch',
                            textAlign: 'center'
                        }}>{title}</Text>
                            : <Text style={styles.titleContent}>cash affiliate</Text>}
                    </View>
                </View>
            </TouchableOpacity>
            <TouchableOpacity style={styles.obj} onPress={()=>navigation.push("Coffin")} >
                <View style={{flex:1}} >
                    <View style={{flex:2,justifyContent:'center',alignItems:'center',paddingBottom:'10%'}}>
                    <Image style={styles.tinyLogo} source={require('../../icons/8.png')} ></Image>
                    </View>
                    <View style={styles.titleContianer}>
                        {props.wordbreak == false ? <Text style={{
                            fontWeight: 'bold', alignSelf: 'stretch',
                            textAlign: 'center'
                        }}>{title}</Text>
                            : <Text style={styles.titleContent}>coffin funeral</Text>}
                    </View>
                </View>
            </TouchableOpacity>

</View>   
    
      
    </>)
}

    
const styles = StyleSheet.create({
    content: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: "#f5f6f8", width: '100%', height: '100%', maxHeight: 170, 
        marginBottom:0,
        paddingTop: '1%',
        paddingBottom: '1%',
        paddingLeft:'2%',
        paddingRight:'2%',
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 1,
        },
        shadowOpacity: 0.22,
        shadowRadius: 2.22,

        elevation: 3,
    },
    tinyLogo: {
        width: 45,
        height: 45,

        
    },
    titleContianer: { backgroundColor: '#f5f6fb',flex:1,justifyContent:'center',alignItems:'flex-end',height: 45,paddingTop:'5%',paddingBottom:'5%', borderRadius: 10 },
    titleContent: {
        fontWeight: 'bold', alignSelf: 'stretch',
        textAlign: 'center',  marginTop: -10
    },
  obj:{
    flex: 1,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: "#ffff", width: '100%', height: '100%', maxHeight: 170, borderRadius:10,
        paddingTop: 10,
        paddingBottom: 10,
        marginLeft:'2%',
        marginRight:'2%',
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 1,
        },
        shadowOpacity: 0.22,
        shadowRadius: 2.22,

        elevation: 3,
    },
    
  

});
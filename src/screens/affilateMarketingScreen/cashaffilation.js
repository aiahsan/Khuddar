import React,{Component} from 'react';
import { View, TouchableOpacity, StyleSheet, Image } from 'react-native';
import Header from '../authorizationScreens/header'

import { Appbar, Avatar, Menu, Provider , Text } from 'react-native-paper';
//()=>navigation.push("AffilationChild",{affilation:{image:require('../../icons/affilation/amazon.png')},title:'Amzaon'})
export default affilation= ({imgUri,title,navigation},props) => {

   
     
    return (<>
      <Header/>
        
        <View style={styles.content}>
            <TouchableOpacity style={styles.obj} onPress={()=>navigation.push("AffilationList",{title:'Amzaon'})} >
                <View style={{flex:1}} >
                    <View style={{flex:2,justifyContent:'center',alignItems:'center',paddingBottom:'10%'}}>
                    <Image style={{width:'60%',height:'100%'}} source={require('../../icons/affilation/amazon.png')} ></Image>
                    </View>
                    <View style={styles.titleContianer}>
                        {props.wordbreak == false ? <Text style={{
                            fontWeight: 'bold', alignSelf: 'stretch',
                            textAlign: 'center'
                        }}>{title}</Text>
                            : <Text style={styles.titleContent}>Share & subscribe</Text>}
                    </View>
                </View>
            </TouchableOpacity>
            <TouchableOpacity style={styles.obj} onPress={()=>navigation.push("AffilationChild",{affilation:{image:require('../../icons/affilation/daraz.png')},title:'Daraz'})} >
               
                <View style={{flex:1}} >
                    <View style={{flex:2,justifyContent:'center',alignItems:'center',paddingBottom:'10%'}}>
                    <Image style={{width:'80%',height:'100%'}} source={require('../../icons/affilation/daraz.png')} ></Image>
                    </View>
                    <View style={styles.titleContianer}>
                        {props.wordbreak == false ? <Text style={{
                            fontWeight: 'bold', alignSelf: 'stretch',
                            textAlign: 'center'
                        }}>{title}</Text>
                            : <Text style={styles.titleContent}>Share & subscribe</Text>}
                    </View>
                </View>
            </TouchableOpacity>

</View>   
    
      
        <View style={styles.content}>
            <TouchableOpacity style={styles.obj} onPress={()=>navigation.push("AffilationChild",{affilation:{image:require('../../icons/affilation/goto.png')},title:'Amzaon'})} >
                  <View style={{flex:1}} >
                    <View style={{flex:2,justifyContent:'center',alignItems:'center',paddingBottom:'10%'}}>
                    <Image style={{width:'70%',height:'100%'}} source={require('../../icons/affilation/goto.png')} ></Image>
                    </View>
                    <View style={styles.titleContianer}>
                        {props.wordbreak == false ? <Text style={{
                            fontWeight: 'bold', alignSelf: 'stretch',
                            textAlign: 'center'
                        }}>{title}</Text>
                            : <Text style={styles.titleContent}>Share & subscribe </Text>}
                    </View>
                </View>
            </TouchableOpacity>
            <TouchableOpacity style={styles.obj} onPress={()=>navigation.push("AffilationChild",{affilation:{image:require('../../icons/affilation/shopify.png')},title:'Amzaon'})} >
                  <View style={{flex:1}} >
                    <View style={{flex:2,justifyContent:'center',alignItems:'center',paddingBottom:'10%'}}>
                    <Image style={{width:'70%',height:'100%'}} source={require('../../icons/affilation/shopify.png')} ></Image>
                    </View>
                    <View style={styles.titleContianer}>
                        {props.wordbreak == false ? <Text style={{
                            fontWeight: 'bold', alignSelf: 'stretch',
                            textAlign: 'center'
                        }}>{title}</Text>
                            : <>
                            <Text style={styles.titleContent}>Share & subscribe</Text>
                            
                            </>}
                    </View>
                </View>
            </TouchableOpacity>

</View>   
    
      
        <View style={styles.content}>
            <TouchableOpacity style={styles.obj} style={styles.obj} onPress={()=>navigation.push("AffilationChild",{affilation:{image:require('../../icons/affilation/shareAsale.png')},title:'Amzaon'})} >
               <View style={{flex:1}} >
                    <View style={{flex:2,justifyContent:'center',alignItems:'center',paddingBottom:'10%'}}>
                    <Image style={{width:'80%',height:'100%'}} source={require('../../icons/affilation/shareAsale.png')} ></Image>
                    </View>
                    <View style={styles.titleContianer}>
                        {props.wordbreak == false ? <Text style={{
                            fontWeight: 'bold', alignSelf: 'stretch',
                            textAlign: 'center'
                        }}>{title}</Text>
                            : <Text style={styles.titleContent}>Share & subscribe</Text>}
                    </View>
                </View>
            </TouchableOpacity>
            <TouchableOpacity style={styles.obj}  style={styles.obj} onPress={()=>navigation.push("AffilationChild",{affilation:{image:require('../../icons/affilation/inspedum.jpg'),style:{width:'30%',height:'20%' }},title:'Amzaon'})} >
            <View style={{flex:1}} >
                    <View style={{flex:2,justifyContent:'center',alignItems:'center',paddingBottom:'10%'}}>
                    <Image style={{width:'50%',height:'100%'}} source={require('../../icons/affilation/inspedum.jpg')} ></Image>
                    </View>
                    <View style={styles.titlContianer}>
                        {props.wordbreak == false ? <Text style={{
                            fontWeight: 'bold', alignSelf: 'stretch',
                            textAlign: 'center'
                        }}>{title}</Text>
                            : <Text style={styles.titleContent}> Share & subscribe</Text>}
                    </View>
                </View>
            </TouchableOpacity>

</View>   
    
      
        <View style={styles.content}>
            <TouchableOpacity style={styles.obj}  style={styles.obj} style={styles.obj} onPress={()=>navigation.push("AffilationChild",{affilation:{image:require('../../icons/affilation/walee.png')},title:'Amzaon'})} >
               <View style={{flex:1}} >
                    <View style={{flex:2,justifyContent:'center',alignItems:'center',paddingBottom:'10%'}}>
                    <Image style={{width:'75%',height:'100%'}} source={require('../../icons/affilation/walee.png')} ></Image>
                    </View>
                    <View style={styles.titleContianer}>
                        {props.wordbreak == false ? <Text style={{
                            fontWeight: 'bold', alignSelf: 'stretch',
                            textAlign: 'center'
                        }}>{title}</Text>
                            : <Text style={styles.titleContent}>Share & subscribe</Text>}
                    </View>
                </View>
            </TouchableOpacity>
            <TouchableOpacity style={styles.obj}  style={styles.obj} style={styles.obj} onPress={()=>navigation.push("AffilationChild",{affilation:{image:require('../../icons/affilation/homeshopping.png')},title:'Amzaon'})} >
                <View style={{flex:1}} >
                    <View style={{flex:2,justifyContent:'center',alignItems:'center',paddingBottom:'10%'}}>
                    <Image style={{width:'65%',height:'100%'}} source={require('../../icons/affilation/homeshopping.png')} ></Image>
                    </View>
                    <View style={styles.titleContianer}>
                        {props.wordbreak == false ? <Text style={{
                            fontWeight: 'bold', alignSelf: 'stretch',
                            textAlign: 'center'
                        }}>{title}</Text>
                            : <Text style={styles.titleContent}>Share & subscribe</Text>}
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
        width: 50,
        height: 50,
        
        
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
import React from 'react';
import {View,Text,StyleSheet} from 'react-native';
import LottieView from 'lottie-react-native'
import {Button} from 'react-native-paper';
import {useNavigation} from '@react-navigation/native'
export default ()=>{
    
    const navigation=useNavigation();
    
    return <View style={styles.container}>
                                               <Text style={{color:'white',fontFamily:'PoppinsBold',fontSize:22,textAlign:'center',paddingTop:50}}>Quiz Result</Text>
    <View style={{flex:.5}}>
    <LottieView  autoPlay source={require('../../animations/tr1.json')} />

    </View>
    <View style={{flex:1}}>
    <Text style={{color:'white',fontFamily:'PoppinsBold',fontSize:28,textAlign:'center'}}>Congratulations!</Text>
    <Text style={{color:'white',fontFamily:'PoppinsMedium',fontSize:14,textAlign:'center',paddingTop:10,paddingLeft:5,paddingRight:5}}>Congratulations your quiz is submitted wait for results after 9 PM</Text>
    {/* <Text style={{color:'white',fontFamily:'PoppinsRegular',fontSize:20,color:'#999ca6',textAlign:'center',paddingTop:10,paddingLeft:5,paddingRight:5,textTransform:'uppercase'}}>Your Score</Text> */}
    {/* <Text style={{color:'white',fontFamily:'PoppinsBold',fontSize:40,color:'#10c69a',textAlign:'center',paddingTop:10,paddingLeft:5,paddingRight:5,textTransform:'uppercase'}}>09<Text style={{color:'white'}}>/09</Text></Text> */}
    {/* <Text style={{color:'white',fontFamily:'PoppinsRegular',fontSize:16,color:'#999ca6',textAlign:'center',paddingTop:15,paddingLeft:5,paddingRight:5,textTransform:'uppercase'}}>Earned Cash</Text> */}
    <View>
    {/* <LottieView  style={{width:100,height:100,marginTop:-15,marginLeft:'14%'}} autoPlay source={require('../../animations/coinAn1.json')} /> */}
    {/* <Text style={{color:'white',fontFamily:'PoppinsBold',fontSize:20,color:'#10c69a',textAlign:'center',marginTop:-64,paddingLeft:5,paddingRight:5,textTransform:'uppercase'}}><Text style={{color:'white'}}>500 RS</Text></Text> */}
    <Button mode='contained' style={{ backgroundColor: "#129d81",width:'80%',alignSelf:'center',marginTop:30 }} labelStyle={{color:'white'}} onPress={() =>navigation.goBack()}>Go Back</Button>

    </View>
    </View>
                               </View>
}

const styles=StyleSheet.create({
    container:{
        flex:1,
        backgroundColor:'#1e2545'
    }
})

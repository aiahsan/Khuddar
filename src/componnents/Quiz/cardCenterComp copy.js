import React from 'react';
import { View, Text, Dimensions } from 'react-native';
import LottieView from 'lottie-react-native'
const width = Dimensions.get('window').width;


export default function () {

return <View style={{ flex: 1, flexDirection: 'row', backgroundColor: '#212121', width: width * 0.9, borderRadius: 30, maxHeight: 230,  alignSelf: 'center' }}>
        <View style={{ flex: .4 }}>
        <LottieView autoPlay loop style={{width:150,height:150,marginLeft:'-7%',marginTop:'13%'}} source={require('../../animation/animation.json')} />

        </View>
        <View style={{ flex: .6,justifyContent:'center',paddingLeft:20 }}>
            <Text style={{fontFamily:'Ubuntu-Bold',fontSize:30,color:'white'}}>Win For</Text>
        
            <Text style={{fontFamily:'Ubuntu-Bold',fontSize:30,color:'white'}}>Cash</Text>
        
        
            <Text style={{fontFamily:'Ubuntu-Medium',fontSize:16,color:'#989898'}}>Earn money by playing online Quiz</Text>
        
        </View>
    </View>
}
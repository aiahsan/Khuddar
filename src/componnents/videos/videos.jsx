import React from 'react';
import {View,Image,TouchableOpacity,Text} from 'react-native';

export default VideList=({video,nextVideo})=>{

    return <TouchableOpacity onPress={()=>nextVideo(video.id)} >
    <View style={{flex:1,height:130,flexDirection:'row'}}>
        <View style={{flex:.8,justifyContent:'center',alignItems:'center'}}>
            <Image source={{uri:video.thumbnail}} style={{width:'90%',maxWidth:200,height:100}} />
        </View>
        <View style={{flex:1,paddingTop:15,margingLeft:16}}>
            <Text numberOfLines={1} ellipsizeMode='tail' style={{maxWidth:'90%',fontSize:14,fontWeight:'600'}}>
              Title: {video.title}
            </Text>
            <Text numberOfLines={1} ellipsizeMode='tail' style={{maxWidth:'90%',fontSize:14,fontWeight:'600',marginTop:5}}>
              Amount: {video.amount}/RS
            </Text>
        </View>
</View> 
</TouchableOpacity> 
    
    
}
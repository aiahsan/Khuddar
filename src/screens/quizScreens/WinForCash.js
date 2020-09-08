import React from 'react';
import { View, Text } from 'react-native';
import CardCenterComp from '../../components/quizComponets/cardCenterComp';
import CategoryCard from '../../components/quizComponets/categoryCard'
export default function () {
    return <>
        <View style={{ flex: 1,backgroundColor:'#edf3f6'}}>
            <View style={{ flex: .4, backgroundColor: '#2a2b31', borderBottomLeftRadius: 30, borderBottomRightRadius: 30 }}>
            
            </View>
            
            <View style={{flex:.6}}>
                <View style={{flex:.20}}></View>
                <View style={{flex:1}}>
                <Text style={{textAlign:'left',marginTop:'3%',marginLeft:'7%',fontSize:22,fontFamily:'Ubuntu-Bold'}}>Quiz Categories</Text>
                <View style={{flex:1,flexDirection:'row',justifyContent:'space-evenly'}}>
                <CategoryCard/>
                
                <CategoryCard/>
                <CategoryCard/>

    
                </View>
                <View style={{flex:1,flexDirection:'row',justifyContent:'space-evenly'}}>
                <CategoryCard />
                
                <CategoryCard/>
                <CategoryCard/>

    
                </View>
                </View>

            </View>
        </View>
        <View style={{position:'absolute', top: '-40%', left: 0, right: 0, bottom: 0, justifyContent: 'center'}}>
        <CardCenterComp  />
        </View>
    </>
}
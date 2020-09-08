
import React, { Component } from 'react';

import { View, Text, StyleSheet, Animated, Platform,Dimensions } from 'react-native';
import TextImages from '../../components/splashComponents/TextAndImages'
import LottieView from "lottie-react-native";

const Height=Dimensions.get('window').height;
export default class App extends Component
{
    constructor()
    {
        super();
 
        this.Animation = new Animated.Value(0);
        
    }
 
    componentDidMount()
    {
        // If you want to Start the animation on button click then call this function on button onPress event.
        this.StartBackgroundColorAnimation();
    }
 
    
    StartBackgroundColorAnimation = () =>
    {
        this.Animation.setValue(0);
 
        Animated.timing(
            this.Animation,
            {
                toValue: 1,
                duration: 6000
            }
        ).start(() => { this.StartBackgroundColorAnimation() });
    }
 
    render()
    {
        const BackgroundColorConfig = this.Animation.interpolate(
        {
            inputRange: [ 0, 0.1, 0.2, 0.3, 0.4, 0.5,0.6,0.7,0.8,0.9 ],
            
            outputRange: [ '#ea845e', '#eda958', '#56ac7b', '#a8b758', '#5996cc', '#0f83ea','#ea845e', '#eda958', '#56ac7b', '#a8b758' ]
 
        });
 
        return(
 
            <Animated.View style = {[ styles.MainContainer, { backgroundColor: BackgroundColorConfig } ]}>
                  
                  <LottieView autoPlay loop source={require('../../animation/rd1.json')} />
                    <TextImages></TextImages>
        
                           
            </Animated.View>
        );
    }
}
 
const styles = StyleSheet.create(
{
    MainContainer:
    {
        justifyContent: 'center',
        alignItems: 'center',
        flex: 1,
        marginTop: (Platform.OS == 'ios') ? 20 : 0
    },
 
    TextStyle: {
 
        color: "#000",
        fontSize: 20,
        textAlign: 'center'
    }
});
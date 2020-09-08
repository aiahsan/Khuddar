import React, { Component } from 'react';
import { View, Text, StyleSheet, Animated, Platform,Image } from 'react-native';

const textArray = ['Buy with profit', 'Win for cash', 'Play for enjoy', 'Sucess with development', 'Shadi mubarak', 'Happy management', 'Cash affiliate','Coffin funrel'];
const imgArray = [require('../../icons/1.png'), require('../../icons/2.png'), require('../../icons/3.png'), require('../../icons/4.png'), require('../../icons/5.png'), require('../../icons/6.png'), require('../../icons/7.png'), require('../../icons/8.png')];

class Home extends Component {
  constructor() {
    super();
    this.state = { textIdx: 0 };
  }

  componentDidMount() {
    this.timeout = setInterval(() => {
      let currentIdx = this.state.textIdx;
      this.setState({ textIdx: currentIdx + 1 });
    }, 300);
  }

  componentDidUnmount() {
    clearInterval(this.timeout);
  }

  render() {
    let textThatChanges = textArray[this.state.textIdx % textArray.length];
    let imgThatChanges = imgArray[this.state.textIdx % imgArray.length];
    return (
        <>
        <Image source={imgThatChanges}  style={{width:35,height:35,marginTop:'28%',marginBottom:40}} />
         <Text style={{textTransform:'uppercase',fontSize:14,fontWeight:'700',marginTop:'12%',color:'white'}}>
    {textThatChanges}  </Text>
    <Text style={{fontWeight:'700',fontSize:14,position:'absolute',bottom:10,color:'white'}}>
           ABYKAN.InC
         </Text>  
    </>
     )
  }
}

export default Home;
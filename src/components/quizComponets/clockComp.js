import React from 'react';
import { StyleSheet, Text, PanResponder, View, PanResponderInstance } from 'react-native';
import { AnimatedCircularProgress } from 'react-native-circular-progress';
import CountDown from 'react-native-countdown-component';
import TestClock from './clockTest'
export default class Clock extends React.Component
{

  constructor(props)
  {
    super(props)
    this.state={
      Time:10
    }
  }
  componentDidMount()
  {
    setTimeout(() => {
      this.setState({Time:5})
    }, 5000);

    
  }
  
  render()
  {
    alert(this.state.Time)
  return (
<View >
          
          <AnimatedCircularProgress
            size={120}
            width={10}
            backgroundWidth={10}
            fill={100}
            tintColor="#00ff00"
            tintColorSecondary="#ff0000"
            backgroundColor="#3d5875"
            duration={this.state.Time*1000}
            prefill={0}
            onAnimationComplete={()=>{
              
            }}
          >
             {
      (duration) => (
        <CountDown
        until={this.state.Time}
        size={30}
        //onFinish={() => alert('Finished')}
        digitStyle={{backgroundColor: 'transparent'}}
        digitTxtStyle={{color: '#1CC625'}}
        timeToShow={['S']}
        timeLabels={{s: ''}}
      />
      )
    }
            </AnimatedCircularProgress>      
        </View>  );
  }
}



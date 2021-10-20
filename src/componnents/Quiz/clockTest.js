import React from 'react';
import { StyleSheet, Text, PanResponder, View, PanResponderInstance } from 'react-native';
import { AnimatedCircularProgress } from 'react-native-circular-progress';
import CountDown from 'react-native-countdown-component';

export default function({time})
{
        const [Fill,setFill]=React.useState(time);

        
       React.useEffect(()=>{
        setFill(time);
        alert(Fill)
       }) 
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
            duration={Fill*1000}
            onAnimationComplete={()=>{
              
            }}
          >
             {
      (duration) => (
        <CountDown
        until={time}
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
        </View>
      );
    
}



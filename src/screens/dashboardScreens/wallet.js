import React,{useContext} from 'react';
import { StyleSheet, Text, View ,TouchableOpacity,Dimensions} from 'react-native';
import AuthContext from '../../context/UserContext';
import {LogOut} from '../../utilities/loginlogout'
import {setUserNull} from '../../utilities/userAsyncFunctions';
import { useNavigation , useRoute } from '@react-navigation/native'
import Header from '../authorizationScreens/header';
import {LineChart} from 'react-native-chart-kit';
import {List} from 'react-native-paper'
export default function Wallet({ navigation }) {
  const authContext=useContext(AuthContext);



  const screenWidth = Dimensions.get("window").width;
  const data = {
      labels: ["January", "February", "March", "April", "May", "June"],
      datasets: [
        {
          data: [20, 45, 28, 80, 99, 43],
          color: (opacity = 1) => `rgba(134, 65, 244, ${opacity})`, // optional
          strokeWidth: 2 // optional
        }
      ],
      legend: ["Rainy Days", "Sunny Days", "Snowy Days"] // optional
    };

console.warn(navigation)
  return (
<>
<Header/>
<View style={styles.container}>
    <View style={styles.containerc1}>
     <LineChart
    data={{
        labels: ["January", "February", "March", "April", "May", "June"],
        datasets: [
          {
            data: [20, 45, 28, 80, 99, 43]
          }
        ]
    }}
    width={Dimensions.get("window").width} // from react-native
    height={220}
    //yAxisLabel="$"
   // yAxisSuffix="k"
    yAxisInterval={1} // optional, defaults to 1
    chartConfig={{
      backgroundColor: "#ffffff",
      backgroundGradientFrom: "#ffffff",
      backgroundGradientTo: "#ffffff",
      decimalPlaces: 0, // optional, defaults to 2dp
      color: (opacity = 1) => `rgba(59, 59, 109, ${opacity})`,
      labelColor: (opacity = 1) => `rgba(132, 132, 132, ${opacity})`,
      style: {
        borderRadius: 0
      },
      propsForDots: {
        r: "6",
        strokeWidth: "2",
        stroke: "#3b3b6d"
      }
    }}
    bezier
    style={{
      marginVertical: 8,
      borderRadius: 16
    }}
  />
    </View>
    <View style={styles.containerc2}>

    <View style={{flex:.7,flexDirection:'row'}}>
    <View style={{flex:1,height:100}}>
      <View style={{...styles.shadow}}>
  <Text style={styles.cardh1}>Current Amount</Text>
  <Text style={styles.cardh1}>200-Rs</Text>

      </View>
    </View>
    <View style={{flex:1,height:100}}>
      <View style={{...styles.shadow}}>
  <Text style={styles.cardh1}>Total Earnigs</Text>
  <Text style={styles.cardh1}>1000-Rs</Text>

      </View>
    </View>
    </View>


    </View>
</View>
</>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor:'white',
    alignItems: 'center',
    justifyContent: 'center',
  },
  containerc1: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  containerc2: {
    flex: 1,

    alignItems: 'center',
    justifyContent: 'center',
  },
  shadow:{
    shadowColor: "#000",
shadowOffset: {
	width: 0,
	height: 3,
},
shadowOpacity: 0.27,
shadowRadius: 4.65,

elevation: 3,
padding:10,
margin:10,
borderRadius:10,height:100
  },
  cardh1:{
    fontWeight:'bold',
    fontSize:14,
    textAlign:'center',
    paddingTop:10
  }
});

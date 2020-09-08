import React from 'react';
import { Image, View, Text, TouchableOpacity } from 'react-native'
import { createStackNavigator } from '@react-navigation/stack';
import Wallet from './wallet'
import Dashboard from './dashboardScreen';
import Affilation from '../affilateMarketingScreen/cashaffilation'
import AffilationChild from '../affilateMarketingScreen/affilationChild'
import AffilationList from '../affilateMarketingScreen/affilationList'
import Header from '../authorizationScreens/header';
import Coffin from '../funeralScreens/Coffin'
import ShadiMubarak from '../shadiScreens/shadi.js';
import BuyWithProfit from '../earningWithVideosScreen/buywithprofit'
import WinForCash from '../quizScreens/WinForCash'
import Questions from '../quizScreens/Questions'
//screen Components


const Stack = createStackNavigator();
const AffilationStack = createStackNavigator();
const BuyWithProfitStack = createStackNavigator();
const WinForCashStack = createStackNavigator();
const AffilaationScreens = () => {
  return (
    <>
      <AffilationStack.Navigator initialRouteName="Affilation" screenOptions={{
        headerShown: false
      }}>

        <AffilationStack.Screen name="Affilation" component={Affilation} initialParams={{ title: 'Affilation' }} />
        <AffilationStack.Screen name="AffilationChild" component={AffilationChild} initialParams={{ title: 'Categories' }} />
        <AffilationStack.Screen name="AffilationList" component={AffilationList} initialParams={{ title: 'Categories' }} />

      </AffilationStack.Navigator>
    </>
  );
};
const BuyWithProfitScreens = () => {
  return (
    <>
      <BuyWithProfitStack.Navigator initialRouteName="BuyWithProfit" screenOptions={{
        headerShown: false
      }}>

        <BuyWithProfitStack.Screen name="BuyWithProfit" component={BuyWithProfit} initialParams={{ title: 'Buy With Profit' }} />

      </BuyWithProfitStack.Navigator>
    </>
  );
};
const WinForCashStackScreens = () => {
  return (
    <>
      <WinForCashStack.Navigator initialRouteName="WinForCash" screenOptions={{
        headerShown: false
      }}>

        <WinForCashStack.Screen name="WinForCash" component={WinForCash} initialParams={{ title: 'Win For Cash' }} />
        <WinForCashStack.Screen name="Questions" component={Questions} initialParams={{ title: 'Questions' }} />

      </WinForCashStack.Navigator>
    </>
  );
};



const AuthScrren = () => {
  return (
    <>
      <Stack.Navigator initialRouteName="Wallet" screenOptions={{
        headerShown: false
      }}>

        <Stack.Screen name="Wallet" component={Wallet} initialParams={{ title: 'Wallet' }} />
        <Stack.Screen name="Dashboard" component={Dashboard} initialParams={{ title: 'Categories' }} />
        <Stack.Screen name="Affilation" component={AffilaationScreens} initialParams={{ title: 'Affilation' }} />
        <Stack.Screen name="Coffin" component={Coffin} initialParams={{ title: 'Coffin Funeral' }} />
        <Stack.Screen name="ShadiMubarak" component={ShadiMubarak} initialParams={{ title: 'Shadi Mubarak' }} />
        <Stack.Screen name="BuyWithProfitScreens" component={BuyWithProfitScreens} initialParams={{ title: 'Buy With Profit Screens' }} />
        <Stack.Screen name="WinForCash" component={WinForCashStackScreens} initialParams={{ title: 'Win For Cash' }} />
      </Stack.Navigator>
    </>
  );
};

export default AuthScrren;




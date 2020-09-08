


import React,{useContext,useEffect} from 'react';
import MainScreen from './src/screens/mainScree'
import { StatusBar } from 'react-native';
import Coffin from './src/screens/funeralScreens/Coffin';
import Shaddi from './src/screens/shadiScreens/shadi';
import * as Font from 'expo-font';
let customFonts = {
  'Inter-Black': require('./assets/fonts/Ubuntu-Bold.ttf'),
  'Ubuntu-Medium': require('./assets/fonts/Ubuntu-Medium.ttf'),
  'Ubuntu-Bold': require('./assets/fonts/Ubuntu-Bold.ttf'),
  'Ubuntu-Regular': require('./assets/fonts/Ubuntu-Regular.ttf'),
};

export default function App() {
  console.disableYellowBox = true;

//<Coffin/><Shaddi/>

const loadFontAsync=  async ()=> {
   await Font.loadAsync(customFonts);
    }
    useEffect(()=>{
      loadFontAsync()
    },[]);
  return (
<>
<StatusBar/>
<MainScreen/>
</>
  );
}
//


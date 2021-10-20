import { createStore, compose, applyMiddleware } from "redux";
import reducers from "../../redux/reducers";
import thunk from "redux-thunk";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { persistStore, persistReducer } from "redux-persist";
import * as SplashScreen from 'expo-splash-screen';

//REDUX SETUP

const persistConfig = {
    key: "root",
    storage: AsyncStorage,
    whitelist: ['userReducer', 'userLanguage', 'userLocation','systemLanguages','fcmToken','ProfileUpdate']
};
//'cartReducer'this.props.nav   igation.navigate('orderStatus', { orderId: orderId })cu
const persistedReducer = persistReducer(persistConfig, reducers);

const middleware = [thunk];
const store = createStore(
    persistedReducer,
    {},
    compose(
        applyMiddleware(...middleware)
    )
);
const persistor = persistStore(store, {}, () => {
    const hideSplash=async ()=>{
        SplashScreen.hideAsync();
    }
    hideSplash();
    setConfig()
});


//API SETUP

const url = '';

var headers=undefined;

//FUNCTION TO LOAD TOKEN AND USER ID

const setConfig = () => {
    var dataBackup;
    // (async ()=>{
    //   try
    //   {
    //     const valuemain=await AsyncStorage.getItem('@user_login_backup')
 
    //     if(valuemain!==null)
    //       {
    //           dataBackup=JSON.parse(valuemain);
              
    //           console.log(dataBackup,"asfhdasihfisd")
    //       }
    //   }
    //   catch(e)
    //   {

    //   }
    // })();
    var data = store.getState();
    var token = null;
    var id = null;

    if (data['userReducer'] !== null) {
        token = data["userReducer"]['token']
        id = data["userReducer"]['id']
    }

    
    headers = {
        'Content-Type': 'application/json',
        'secret':token!=null&&token.token?token.token:"",
        'user_id': id!=null?id:''
    };
}


const maps_api='AIzaSyCLMQZjetUzF6q_Ym-ugqEuqpIFY-jrq3Y';

export { store, persistor, url, setConfig, headers ,maps_api}
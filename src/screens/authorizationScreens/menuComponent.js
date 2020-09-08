import React, { useRef,useContext } from 'react';

import { View, Text, StyleSheet ,Image,TouchableOpacity} from 'react-native';
import Menu, { MenuItem, MenuDivider } from 'react-native-material-menu';
import { useNavigation , useRoute } from '@react-navigation/native'
import AuthContext from '../../context/UserContext';
import {setUserNull} from '../../utilities/userAsyncFunctions';


function App() {
  const menu = useRef();

  const hideMenu = () => menu.current.hide();

  const showMenu = () => menu.current.show();
  const authContext=useContext(AuthContext);
  const routes=useRoute();
    const navigation=useNavigation();
  return (
   
    <View style={styles.container}>
      <Menu style={{marginTop:40,marginLeft:-30}} ref={menu} button={<TouchableOpacity onPress={showMenu}>
        <Image  style={{ width: 40, height: 40, borderRadius: 40 }} source={require('../../icons/av1.jpg')}
         />
      </TouchableOpacity>}>

        {(routes.name!="Wallet"?        <MenuItem disabled>Dashboard</MenuItem>:
                <MenuItem  onPress={()=>{
                    hideMenu()
                    navigation.push("Dashboard");
        
            }}>Dashboard</MenuItem>
        )}

        <MenuItem onPress={hideMenu}>About</MenuItem>
        <MenuItem onPress={hideMenu}>Help</MenuItem>
        
        <MenuDivider />
        <MenuItem onPress={()=>{
    authContext.setUserstate(null);
    setUserNull();


}}>Log Out</MenuItem>
      </Menu>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',

  },
});

export default App;
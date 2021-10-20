import * as React from 'react';
import {TouchableOpacity} from 'react-native'
import { Searchbar } from 'react-native-paper';
import { Feather } from '@expo/vector-icons';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { styles } from '../../styles/authStyles';
import { useNavigation } from '@react-navigation/native';
import {Nav} from '../../navigation/navigationType'
const MyComponent = ({hasRight}) => {
  const [searchQuery, setSearchQuery] = React.useState('');

  const onChangeSearch = query => setSearchQuery(query);
  const navigation = useNavigation();

  return (
    <Searchbar
    style={styles.searchBarStyle}
    inputStyle={styles.searchBartilte}
      placeholder="Search for your best product"
      onChangeText={onChangeSearch}
      value={searchQuery}
      clearIcon={()=> hasRight && hasRight==true?<TouchableOpacity onPress={()=>navigation.navigate(Nav.SearchTab)} >
      <MaterialCommunityIcons name="filter-variant" size={24} color="black" />
    </TouchableOpacity>:<></>}

    />
  );
};

export default MyComponent;
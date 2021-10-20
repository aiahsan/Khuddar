import React from 'react';
import { View, Image, Text, ScrollView, SafeAreaView ,StyleSheet} from 'react-native';
import { styles } from '../../styles/authStyles';
import { Button } from 'react-native-paper';
import { TextInput } from 'react-native-paper';
import { Ionicons } from '@expo/vector-icons';
import { AntDesign } from '@expo/vector-icons';
import { Feather } from '@expo/vector-icons';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import CurvedNavBar from '../../componnents/auth/bottomTab'
import RNPickerSelect from 'react-native-picker-select';
import { useNavigation } from '@react-navigation/native';
import Header from '../../componnents/auth/header';
import {Nav} from '../../navigation/navigationType'
export default () => {
    let [page, setPage] = React.useState({});
    const [selectedValue, setSelectedValue] = React.useState("Category (Optional)");
    const navigation = useNavigation();

    return <> 
   
    </>
}

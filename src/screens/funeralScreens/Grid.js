import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet ,ScrollView} from "react-native";
import GridRow from '../../components/funeralComponets/gridRow';
import GridHead from '../../components/funeralComponets/gridHeading';
export default function () {

    return (
        <View style={styles.Container}>
                         <GridHead title1="Name" title2="Quantity" title3="Action" />
             <ScrollView nestedScrollEnabled={true}>
                <GridRow value="Biryani Daig" count="0" />
                <GridRow value="Kanat" count="0" />
                <GridRow value="Aman Ambulance" count="0" />
                <GridRow value="Aman Ambulance" count="0" />
                <GridRow value="Aman Amebulance" count="0" />
                <GridRow value="Aman Ambulance" count="0" />
                <GridRow value="Aman Ambulance1" count="0" />
             </ScrollView>
        </View>)

}

const styles = StyleSheet.create({
    Container: {
        flex: 1,
        marginTop:20
    }
})

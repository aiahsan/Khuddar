import React from 'react';
import { View, ScrollView, TouchableOpacity, Text, StyleSheet } from 'react-native';
import Header from '../authorizationScreens/header';
import { useNavigation } from '@react-navigation/native';
import IAC from '../../components/affilateMarketingComponents/affilationListCarousel';
import HorizontalCard from '../../components/affilateMarketingComponents/horizontalCard'
export default function () {

    return (
        <>
            <Header />
            <View style={styles.container}>
                <View style={styles.containerTop}>
                    <IAC />
                </View>
                <View style={styles.containerBottom}>
                    <View style={styles.containerBottomInner}>
                        <Text style={styles.innerText}>Recomended</Text>
                        <TouchableOpacity><Text style={styles.innerTouchable}>See All</Text>
                        </TouchableOpacity>
                    </View>
                    <View style={styles.listView}>
                        <ScrollView horizontal={true} style={styles.listViewScroll}>
                            <HorizontalCard />
                            <HorizontalCard />
                            <HorizontalCard />
                        </ScrollView>
                    </View>
                </View>
            </View>
        </>
    )
}

const styles = StyleSheet.create({
    container: { flex: 1, backgroundColor: 'white' },
    containerTop: { flex: .7 },
    containerBottom: { flex: .4 },
    containerBottomInner: { flexDirection: 'row', justifyContent: 'space-between', paddingLeft: 20, paddingRight: 20 },
    innerText: { textAlign: 'left', fontFamily: 'Ubuntu-Bold', fontSize: 18, color: '#484848' },
    innerTouchable: { textAlign: 'right', color: '#c3c3c3', fontFamily: 'Ubuntu-Bold' },
    listView: { flex: 1, paddingTop: 15, paddingLeft: 20 },
    listViewScroll: { paddingBottom: 10 },

});
/*


 <TouchableOpacity onPress={()=>navigation.push("AffilationChild",{affilation:{image:require('../../icons/affilation/amazon.png')},title:'Amzaon'})}>
                    <AffilationCard/>

                    </TouchableOpacity>


*/
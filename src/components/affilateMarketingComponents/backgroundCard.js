import React from 'react'
import { StyleSheet, View, Text, Dimensions, Image, TouchableOpacity } from 'react-native';
import { Fontisto } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
const Width = Dimensions.get('window').width;

export default function () {
    const navigation = useNavigation();

    return <>
        <View style={styles.card} >
            <TouchableOpacity style={styles.cardBackgdround} onPress={() => navigation.push("AffilationChild", { affilation: { image: require('../../icons/affilation/amazon.png') }, title: 'Amzaon' })}>
                <Image resizeMode={'cover'}
                    style={styles.backImage} source={{
                        uri:
                            'https://www.phoneworld.com.pk/wp-content/uploads/2020/06/amazon.jpg'
                    }} />
            </TouchableOpacity>
            <View style={styles.cardbottomBody}>
                <Text numberOfLines={1} ellipsizeMode='tail' style={styles.heading} >Sell your products on Amazon</Text>
                <View style={styles.social}></View>
                <View style={styles.socialInner}>
                    <Fontisto name="like" size={18} color="#c2c2c2" /><Text style={styles.likeText}>25K</Text>
                    <Fontisto name="eye" size={18} style={styles.viewTextIcon} color="#c2c2c2" /><Text style={styles.viewText}>205K</Text>
                </View>
            </View>
        </View>
    </>
}

const styles = StyleSheet.create({
    cardBackgdround: {
        backgroundColor: 'white',
        borderRadius: 20,
        flex: 1.5,
        width: Width * .85,
        justifyContent: 'center'
        , alignItems: 'center'
        , marginLeft: -10,

    },
    cardbottomBody: {
        backgroundColor: 'white',
        borderRadius: 15,
        flex: .80,
        width: Width * .75,

        marginLeft: -10,
        position: 'relative',
        top: '-15%',
        left: '5%',
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 4,
        },
        shadowOpacity: 0.32,
        shadowRadius: 5.46,

        elevation: 9,
    },

    backImage: { width: '100%', height: '100%', borderRadius: 20, },
    card: { flex: 1, justifyContent: 'center', marginTop: '7%', marginBottom: 15 },
    heading: { color: '#1c1c1d', fontSize: 16, textAlign: 'auto', marginLeft: 20, marginRight: 10, marginTop: 10, fontFamily: 'Ubuntu-Bold', paddingTop: 12 },
    social: { width: '80%', height: 1, backgroundColor: '#f1f1eb', alignSelf: 'center', marginTop: '4%' },
    socialInner: { flex: 1, flexDirection: 'row', paddingTop: '3%', paddingLeft: '10%' },
    likeText: { marginLeft: 10, color: '#c2c2c2' },
    viewTextIcon: { marginLeft: 10 },
    viewText: { marginLeft: 10, color: '#c2c2c2' }
});
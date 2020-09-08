import React from 'react';
import { Image, StyleSheet, View, Text, TouchableOpacity } from 'react-native'
export default function () {
    return <>
        <TouchableOpacity style={styles.CardViewShadow}>
            <Image resizeMode={'cover'}
                style={styles.backImage} source={{
                    uri:
                        'https://www.phoneworld.com.pk/wp-content/uploads/2020/06/amazon.jpg'
                }} />
            <Text numberOfLines={2} ellipsizeMode='tail' style={styles.heading} >Sell your products on Amazon</Text>

        </TouchableOpacity>
    </>
}


const styles = StyleSheet.create({
    CardViewShadow: {
        backgroundColor: 'white',
        borderRadius: 15,
        marginRight: 19,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 4,
        },
        shadowOpacity: 0.32,
        shadowRadius: 5.46,
        maxHeight: 160,
        elevation: 2, marginLeft: 10, marginBottom: 1
    },
    backImage: { width: 160, height: '100%', maxHeight: 100, borderTopRightRadius: 16, borderTopLeftRadius: 16 },
    heading: { color: '#1c1c1d', fontSize: 12, textAlign: 'auto', marginLeft: 20, marginRight: 10, marginTop: 10, fontFamily: 'Ubuntu-Bold', width: 120, marginLeft: 10 }

})
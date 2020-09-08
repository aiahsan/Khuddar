import React from 'react';
import { Text, View, TouchableOpacity, StyleSheet, Image } from 'react-native'
export default DashboardButton = ({imgUri,title}) => {

    return (<>
        <TouchableOpacity style={styles.content}>
            <View >
                <Image style={styles.tinyLogo} source={imgUri} ></Image>
                <View style={styles.titleContianer}>
                    {props.wordbreak == false ? <Text style={{
                        fontWeight: 'bold', alignSelf: 'stretch',
                        textAlign: 'center'
                    }}>{props.title}</Text>
                        : <Text style={styles.titleContent}>{title}</Text>}
                </View>
            </View>




        </TouchableOpacity>
    </>)
}


const styles = StyleSheet.create({
    content: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: "#ffffff", width: '100%', height: '100%', maxHeight: 170, borderRadius: 10,
        paddingTop: 10,
        paddingBottom: 10,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 1,
        },
        shadowOpacity: 0.22,
        shadowRadius: 2.22,

        elevation: 3,
    },
    tinyLogo: {
        width: 70,
        height: 70,
        marginLeft: 35
    },
    titleContianer: { backgroundColor: '#f5f6fa', width: 140, height: 45, borderRadius: 10, padding: 10, marginTop: 20 },
    titleContent: {
        fontWeight: 'bold', alignSelf: 'stretch',
        textAlign: 'center', maxWidth: 90, marginLeft: 15, marginTop: -5
    }

});
import React from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native';
// import { TouchableOpacity } from 'react-native-gesture-handler';
import colors from '../config/colors';
import { ScrollView } from 'react-native-gesture-handler';

function Order(props) {
    return (
       <View style={styles.orderBody}>
        <ScrollView>
            <View  marginBottom={30} style={{display: "flex",justifyContent: "center", alignItems: "center"}}>
                <Image source={require('../assets/background.png')} resizeMode='cover' style={styles.profilePic}></Image>
            </View>
            <View width={'100%'} paddingHorizontal={10}>
                <View style={styles.nameBox}>
                <Text style={styles.name}>salon name</Text>
                </View>
                <View style={styles.serviceBox}>
                <Text style={styles.service}>service name</Text>
                </View>
                <View style={styles.dateBox}>            
                <Text style={styles.date}>service date & time</Text>
                </View>
                <View style={styles.priceBox}>
                <Text style={styles.priceRange}>price range</Text>
                </View>
                <View style={styles.depositBox}>
                <Text style={styles.deposit}>deposite</Text>
                </View> 
            <TouchableOpacity style={styles.btnBox}>
            <Text style={styles.checkOut}>pay</Text>
            </TouchableOpacity>
            </View>
            </ScrollView>
       </View>
    );
}

const styles = StyleSheet.create({
    orderBody:{
        backgroundColor: 'black',
        height: '100%',
        // direction: 'rtl',
        flexDirection: 'column',
        paddingHorizontal: 20,
        paddingTop: 50,
        justifyContent: 'center',
        alignItems: 'center'
    },
    profilePic:{
        width: 100,
        height: 100,
        borderRadius: 80,
        overflow: "hidden",
        borderWidth: 1,
        borderColor: colors.yellow,
    },
    name:{
            color: colors.blue,
            fontFamily: 'YekanBakh-Regular',
            fontSize: 20,
            paddingHorizontal: 20,
            textAlign: 'center',
            textShadowOffset: {width: 1 , height: 1},
            shadowOpacity: 0.5,
            textShadowRadius: 20,
            textShadowColor: colors.blue,
            elevation: 10,
    },
    service:{
        color: colors.pink,
        fontFamily: 'YekanBakh-Regular',
        fontSize: 20,
        paddingHorizontal: 20,
        textAlign: 'center',
        textShadowOffset: {width: 1 , height: 1},
        shadowOpacity: 0.5,
        textShadowRadius: 20,
        textShadowColor: colors.pink,
        elevation: 10,
    },
    date:{
        color: colors.purple,
        fontFamily: 'YekanBakh-Regular',
        fontSize: 20,
        paddingHorizontal: 20,
        textAlign: 'center',
        textShadowOffset: {width: 1 , height: 1},
        shadowOpacity: 0.5,
        textShadowRadius: 20,
        textShadowColor: colors.purple,
        elevation: 10,
    },
    priceRange:{
        color: colors.yellow,
        fontFamily: 'YekanBakh-Regular',
        fontSize: 20,
        paddingHorizontal: 20,
        textAlign: 'center',
        textShadowOffset: {width: 1 , height: 1},
        shadowOpacity: 0.5,
        textShadowRadius: 20,
        textShadowColor: colors.yellow,
        elevation: 10,
    },
    deposit:{
        color: colors.white,
        fontFamily: 'YekanBakh-Regular',
        fontSize: 20,
        paddingHorizontal: 20,
        textAlign: 'center',
        textShadowOffset: {width: 1 , height: 1},
        shadowOpacity: 0.5,
        textShadowRadius: 20,
        textShadowColor: colors.white,
        elevation: 10,
    },
    checkOut:{
        color: '#39FF14',
        fontFamily: 'YekanBakh-Regular',
        fontSize: 20,
        paddingHorizontal: 20,
        textAlign: 'center',
        borderRadius:20,
        margin: 5,
    },
    nameBox:{
        borderColor: colors.blue,
        borderWidth: 1,
        borderRadius: 20,
        margin:10,
    },
    serviceBox:{
        borderColor: colors.pink,
        borderWidth: 1,
        borderRadius: 20,
        margin:10,
    },
    dateBox:{
        borderColor: colors.purple,
        borderWidth: 1,
        borderRadius: 20,
        margin:10,
    },
    priceBox:{
        borderColor: colors.yellow,
        borderWidth: 1,
        borderRadius: 20,
        margin:10,
    },
    depositBox:{
        borderColor: colors.white,
        borderWidth: 1,
        borderRadius: 20,
        margin:10,
    },
    btnBox:{
        borderColor: '#39FF14',
        borderWidth: 1,
        borderRadius: 20,
        marginTop: 100
    }
})

export default Order;
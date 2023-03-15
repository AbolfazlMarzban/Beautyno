import React from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import colors from '../config/colors';

function Order(props) {
    return (
       <View style={styles.orderBody}>
            <View width = {'30%'} marginBottom={30}>
                <Image source={require('../assets/background.png')} resizeMode='cover' style={styles.profilePic}></Image>
            </View>
            <View width={'80%'} paddingHorizontal={20}>
                <View style={styles.nameBox}>
                <Text style={styles.name}>اسم آرایشگاه</Text>
                </View>
                <View style={styles.serviceBox}>
                <Text style={styles.service}>اسم خدمت</Text>
                </View>
                <View style={styles.dateBox}>            
                <Text style={styles.date}>روز و ساعت و تاریخ خدمت</Text>
                </View>
                <View style={styles.priceBox}>
                <Text style={styles.priceRange}>بازه قیمتی</Text>
                </View>
                <View style={styles.depositBox}>
                <Text style={styles.deposit}>مبلغ ودیعه</Text>
                </View> 
            <TouchableOpacity style={styles.btnBox}>
            <Text style={styles.checkOut}>پرداخت</Text>
            </TouchableOpacity>
            </View>
       </View>
    );
}

const styles = StyleSheet.create({
    orderBody:{
        backgroundColor: 'black',
        height: '100%',
        direction: 'rtl',
        flexDirection: 'column',
        paddingHorizontal: 20,
        paddingVertical: 40,
        justifyContent: 'center',
        alignItems: 'center'
    },
    profilePic:{
        width: '100%',
        height: 160,
        borderRadius: 80,
        overflow: "hidden",
        borderWidth: 3,
        borderColor: colors.yellow,
    },
    name:{
            color: colors.blue,
            fontFamily: 'YekanBakh-Regular',
            fontSize: 25,
            paddingRight: 20, 
            padding: 15,
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
        fontSize: 25,
        paddingRight: 20, 
        padding: 15,
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
        fontSize: 25,
        paddingRight: 20, 
        padding: 15,
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
        fontSize: 25,
        paddingRight: 20, 
        padding: 15,
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
        fontSize: 25,
        paddingRight: 20, 
        padding: 15,
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
        fontSize: 22,
        paddingRight: 20, 
        padding: 15,
        textAlign: 'center',
        borderRadius:20,
        margin: 5,
    },
    nameBox:{
        borderColor: colors.blue,
        borderWidth: 2,
        borderRadius: 20,
        margin:10,
    },
    serviceBox:{
        borderColor: colors.pink,
        borderWidth: 2,
        borderRadius: 20,
        margin:10,
    },
    dateBox:{
        borderColor: colors.purple,
        borderWidth: 2,
        borderRadius: 20,
        margin:10,
    },
    priceBox:{
        borderColor: colors.yellow,
        borderWidth: 2,
        borderRadius: 20,
        margin:10,
    },
    depositBox:{
        borderColor: colors.white,
        borderWidth: 2,
        borderRadius: 20,
        margin:10,
    },
    btnBox:{
        borderColor: '#39FF14',
        borderWidth: 2,
        borderRadius: 20,
        marginTop: 100
    }
})

export default Order;
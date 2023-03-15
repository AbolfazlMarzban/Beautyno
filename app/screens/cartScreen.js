import React from 'react'
import { View, Text, SafeAreaView, StyleSheet, Image, TouchableOpacity } from 'react-native'
import colors from '../config/colors'

function Cart({navigation}) {

    const goToOrder = ()=>{
        navigation.navigate('Order')
    }
    return (
        <SafeAreaView style={styles.cart}>
            <TouchableOpacity onPress={goToOrder}> 
            <View style={styles.orderBox}>
                <View>
                <Image source={require('../assets/background.png')} resizeMode='contain' style={styles.profilePic}></Image>
                </View>
                <View style={{display: 'flex', flexDirection: 'row-reverse', padding:30}}>
                    <Text style={styles.name}>اسم آرایشگاه</Text>
                    <Text style={styles.service}>اسم خدمت</Text>
                </View>
            </View>
            </TouchableOpacity>
            <TouchableOpacity onPress={goToOrder}>
            <View style={styles.orderBox}>
                <View>
                <Image source={require('../assets/background.png')} resizeMode='contain' style={styles.profilePic}></Image>
                </View>
                <View style={{display: 'flex', flexDirection: 'row-reverse', padding:30}}>
                    <Text style={styles.name}>اسم آرایشگاه</Text>
                    <Text style={styles.service}>اسم خدمت</Text>
                </View>
            </View>
            </TouchableOpacity>
            <TouchableOpacity onPress={goToOrder}>
            <View style={styles.orderBox}>
                <View>
                <Image source={require('../assets/background.png')} resizeMode='contain' style={styles.profilePic}></Image>
                </View>
                <View style={{display: 'flex', flexDirection: 'row-reverse', padding:30}}>
                    <Text style={styles.name}>اسم آرایشگاه</Text>
                    <Text style={styles.service}>اسم خدمت</Text>
                </View>
            </View>
            </TouchableOpacity>
      
        </SafeAreaView>
    )
}
const styles = StyleSheet.create({
    cart: {
        backgroundColor: 'black',
        height: '100%', 
        padding: 20
    },
    name:{
        color: 'white',
            fontFamily: 'YekanBakh-Regular',
            fontSize: 22,
            paddingRight: 20, 
            flex: 0.45,
            padding: 10,
            backgroundColor: colors.blue,
            textAlign: 'center',
            borderRadius:20,
            margin: 5
    },
    service:{
        color: 'white',
            fontFamily: 'YekanBakh-Regular',
            fontSize: 22,
            paddingRight: 20, 
            flex: 0.45,
            padding: 10,
            backgroundColor: colors.pink,
            textAlign: 'center',
            borderRadius:20,
            margin: 5

    },
    orderBox:{
        borderWidth: 3,
        borderColor: colors.purple,
        backgroundColor:colors.black,
        borderRadius: 20,
        paddingHorizontal: 20,
        margin: 20,
        elevation: 30,
        shadowColor: colors.purple,
        shadowOpacity: 0.9,
        shadowRadius: 20,
        shadowOffset: {height: 1, width: 1},
        display: 'flex',
        flexDirection: 'row-reverse',
        textAlign: 'right',
        alignItems: 'center'
    },
    profilePic:{
        width: 100,
        height: 100,
        borderRadius: 150 / 2,
        overflow: "hidden",
        borderWidth: 3,
        borderColor: colors.yellow,
    },
})
export default Cart
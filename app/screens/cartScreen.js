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
                <Image source={require('../assets/background.png')} resizeMode='cover' style={styles.profilePic}></Image>
                </View>
                <View style={{display: 'flex', flexDirection: 'row-reverse', padding:15}}>
                    <Text style={styles.name}>salon name</Text>
                    <Text style={styles.service}>service name</Text>
                </View>
            </View>
            </TouchableOpacity>
            <TouchableOpacity onPress={goToOrder}> 
            <View style={styles.orderBox}>
                <View>
                <Image source={require('../assets/background.png')} resizeMode='cover' style={styles.profilePic}></Image>
                </View>
                <View style={{display: 'flex', flexDirection: 'row-reverse', padding:15}}>
                    <Text style={styles.name}>salon name</Text>
                    <Text style={styles.service}>service name</Text>
                </View>
            </View>
            </TouchableOpacity>
            <TouchableOpacity onPress={goToOrder}> 
            <View style={styles.orderBox}>
                <View>
                <Image source={require('../assets/background.png')} resizeMode='cover' style={styles.profilePic}></Image>
                </View>
                <View style={{display: 'flex', flexDirection: 'row-reverse', padding:15}}>
                    <Text style={styles.name}>salon name</Text>
                    <Text style={styles.service}>service name</Text>
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
        padding: 10,
        paddingTop: 50
    },
    name:{
        color: 'white',
            fontFamily: 'YekanBakh-Regular',
            fontSize: 15,
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
            fontSize: 15,
            paddingRight: 20, 
            flex: 0.45,
            padding: 10,
            backgroundColor: colors.pink,
            textAlign: 'center',
            borderRadius:20,
            margin: 5

    },
    orderBox:{
        borderWidth: 1,
        borderColor: colors.purple,
        backgroundColor:colors.black,
        borderRadius: 20,
        paddingHorizontal: 10,
        margin: 5,
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
        width: 60,
        height: 60,
        borderRadius: 150 / 2,
        overflow: "hidden",
        borderWidth: 3,
        borderColor: colors.yellow,
    },
})
export default Cart
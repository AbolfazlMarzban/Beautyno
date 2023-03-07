import React from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';
import colors from '../config/colors';

function homeScreen(props) {
    
    return (
        <View style={styles.screen}>
            <Text style={styles.text}>صفحه ی اصلی</Text>
            <View style={styles.picBox}>
                <View style={styles.profile}>
                    <Image source={require('../assets/logo-no-background.png')} resizeMode='contain' style={styles.profilePic}></Image>
                </View>
            </View>
        </View>
    );
}


const styles = StyleSheet.create({
    screen:{
        backgroundColor: 'black',
        height:'100%',
        padding: 20
    },
    text:{
        color: 'white',
            fontFamily: 'YekanBakh-Regular'

    },
    picBox:{
        alignItems: 'flex-end'
    },
    profile:{
        width: 100,
        height: 100
    },
    profilePic:{
        width: '100%'
    }
})
export default homeScreen;
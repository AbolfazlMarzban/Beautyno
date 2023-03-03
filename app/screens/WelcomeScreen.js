import React from 'react';
import { ImageBackground, StyleSheet } from 'react-native';

function WelcomeScreen(props) {
    return (
        <ImageBackground resizeMode='contain' source={require("../assets/background.png")} style={styles.background}></ImageBackground>
    );
}

const styles = StyleSheet.create({
    background:{
        width: "100%",
        height: "100%"
    }
})

export default WelcomeScreen;
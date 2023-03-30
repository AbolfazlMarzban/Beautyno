import React from 'react';
import { View, Text, StyleSheet, TextInput } from 'react-native';
import colors from '../config/colors';

function csProfileData(props) {
    return (
       <View style={styles.body}>
            <Text style={{ color: colors.white, fontFamily:'YekanBakh-Regular', fontSize: 20, marginBottom: 10}}>کد ملی</Text>
            <TextInput
                style={styles.txtbox}
                placeholder='کد ملی خود را وارد کنید'
                placeholderTextColor={colors.white}
            ></TextInput>
            <Text style={{ color: colors.white, fontFamily:'YekanBakh-Regular', fontSize: 20, marginBottom: 10, marginTop: 30}}>
                عکس پروفایل
            </Text>
            
       </View>
    );
}

const styles = StyleSheet.create({
    body:{
        backgroundColor: 'black',
        height: '100%',
        padding: 20,
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center'
    },
    txtbox:{
        fontFamily: 'YekanBakh-Regular',
        fontSize: 20,
        borderWidth: 1,
        borderColor: colors.white,
        width: 300,
        padding: 15,
        textAlign: 'center',
        borderRadius: 20,
        shadowColor: colors.white,
        shadowRadius: 20,
        shadowOpacity: 1,
        shadowOffset: {width: 2, height: 2},
        elevation: 8,
        backgroundColor: colors.black,
        color: colors.white
    }
})

export default csProfileData;
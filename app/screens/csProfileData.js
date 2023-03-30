import React from 'react';
import { View, Text, StyleSheet, TextInput, TouchableOpacity } from 'react-native';
import colors from '../config/colors';
import Icon from "react-native-vector-icons/MaterialCommunityIcons"
// import Mapir from "mapir-react-native-sdk"


function csProfileData(props) {
    const apiKey = "eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiIsImp0aSI6ImVkZjg4N2QwYzMyMTUwYzA5ZTcyZDFiZjllOTIyMGEwYzFhNTI1NGM0NjYyNzgxYTBmMzgyMDZlZTA0NjMxOWRkY2Y2ZjM2NzUyNWRkMmMxIn0.eyJhdWQiOiIxOTc0OCIsImp0aSI6ImVkZjg4N2QwYzMyMTUwYzA5ZTcyZDFiZjllOTIyMGEwYzFhNTI1NGM0NjYyNzgxYTBmMzgyMDZlZTA0NjMxOWRkY2Y2ZjM2NzUyNWRkMmMxIiwiaWF0IjoxNjY2Mzc5NjAwLCJuYmYiOjE2NjYzNzk2MDAsImV4cCI6MTY2ODg4NTIwMCwic3ViIjoiIiwic2NvcGVzIjpbImJhc2ljIl19.k1uS-outUK79ZaCtooAQIECo115uX_yo_odSwzFdvRknGD3syd5HgNnrBcPkZDYOryUuke8-KtdzWRHW6XXNOl1bZSYIo7N9egBKvFXnc6lVIDaBGtKGMGjDRmD2tqj0d1lpuFzJe4NpxxR210CXykg-GXgdc0eecgKlLmqJ7Pz-63V9SAIY8NW0Q3xbCi_DWDclmuyFktFoDP-9qtD84a9vyZOPOmNTz0x7LYgSVz9N3jJIEhyQ326TEOyX0fDsLIdHW9WhouVWKwoygmSFHa0r_GIAG2ywWEZG6AMurNviQctBuAbFvDAwONkPw9Um2qRzJk6gEr4pC-vz06gtRg"
    const center = [48.69349848715629, 31.32144695918568]
    return (
       <View style={styles.body}>
            <Text style={{ color: colors.white, fontFamily:'YekanBakh-Regular', fontSize: 20, marginBottom: 10, marginTop: 30}}>
                عکس پروفایل
            </Text>
            <TouchableOpacity style={styles.propick}>
            <Icon name={'plus-circle'} size={50} color={colors.white}  style={{ textShadowOffset:{width:1, height:1},
                        textShadowColor: colors.white,
                        shadowOpacity: 0.5,
                        elevation: 10,
                        textShadowRadius: 10}} />
            </TouchableOpacity>
            <Text style={{ color: colors.white, fontFamily:'YekanBakh-Regular', fontSize: 20, marginBottom: 10,  marginTop: 30}}>کد ملی</Text>
            <TextInput
                style={styles.txtbox}
                placeholder='کد ملی خود را وارد کنید'
                placeholderTextColor={colors.white}
            ></TextInput>
            <Text style={{ color: colors.white, fontFamily:'YekanBakh-Regular', fontSize: 20, marginBottom: 10,  marginTop: 30}}>آدرس</Text>
            {/* <Mapir
               apiKey={apiKey}
                onRegionDidChange={(e) => onRegionDidChange(e)}
                style={styles.mapbox}
        >
          <Mapir.Camera
            zoomLevel={13}
            centerCoordinate={center}
          />
        </Mapir> */}
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
    },
    propick:{
        width: 100,
        backgroundColor: colors.blue,
        height: 100,
        borderRadius: 100,
        shadowColor: colors.blue,
        shadowOpacity: 0.8,
        shadowOffset: {width: 1, height: 1},
        shadowRadius: 20,
        elevation: 10,
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center'
    },
    mapbox:{
        height: 300,
        width: 300
    }

})

export default csProfileData;
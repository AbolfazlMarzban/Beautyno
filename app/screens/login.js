import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image, TouchableWithoutFeedback, TouchableOpacity, TouchableHighlight,Button, SafeAreaView, TextInput } from 'react-native';
import { useFonts } from "expo-font";
import AppLoading from "expo-app-loading";  
import colors from '../config/colors';



export default function login({navigation}) {
  let [fontsLoaded] = useFonts({
    'YekanBakh-Regular': require('../assets/fonts/YekanBakh-Regular.ttf')
  })

  if(!fontsLoaded){
    return <AppLoading />;
  }

  const pressHandler = ()=>{
    navigation.navigate('Home')
    //another method
    // navigation.push('Home')


    //to go back to the last page 
    //navigation.goBack()
  }
  return (
    <View style={styles.container}>
      <Image resizeMode='contain' source={require("../assets/logo-no-background.png")} style={styles.Image}></Image>
      <TextInput 
                style={styles.Input}
                placeholder="شماره موبایل خود را وارد کنید"
                keyboardType="numeric"
                placeholderTextColor={colors.white}
        
      ></TextInput>
       <TextInput 
                style={styles.Input}
                placeholder="کد ارسال شده را وارد کنید"
                keyboardType="numeric"
                placeholderTextColor={colors.white}
        
      ></TextInput>
      <TouchableOpacity style={styles.Button} onPress={pressHandler}>
        <Text style={{fontSize:23, textAlign: 'center', color: colors.white, fontFamily: 'YekanBakh-Regular'}}>ورود</Text>
      </TouchableOpacity>   
     
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.black,
    alignItems: 'center',
    justifyContent: 'center',
    fontFamily: 'YekanBakh-Regular'
  },
  Text:{
    fontSize: 23,
    color: colors.purple,
    fontFamily: 'YekanBakh-Regular',
    paddingBottom: 20
  }, 
  Image: {
    width: 300 ,
  },
  Input: {
    width: 300,
    padding: 15,
    borderWidth : 1,
    borderColor: colors.purple,
    borderRadius: 20,
    shadowColor: colors.purple,
    shadowOffset: {width: 2, height: 2},
    shadowOpacity: 0.5,
    shadowRadius: 20,
    shadowColor: colors.purple,
    elevation: 10,
    backgroundColor: colors.purple,
    fontSize: 20,
    color: colors.white,
    fontFamily: 'YekanBakh-Regular',
    marginBottom: 50,
    textAlign: "center"
  },
  Button:{
    backgroundColor: colors.blue,
    width: 300,
    fontSize: 30,
    textAlign: 'center',
    padding: 10,
    borderRadius: 20,
    shadowColor: colors.blue,
    shadowOffset: {width: 2, height: 2},
    shadowOpacity: 0.5,
    shadowRadius: 20,
    shadowColor: colors.blue,
    elevation: 10,
  }
});

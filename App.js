import * as React from 'react';
import Navigator from "./routes/homeStack"
import { useFonts } from "expo-font";
import AppLoading from "expo-app-loading"; 
import 'react-native-gesture-handler'; 


export default function App() {
  let [fontsLoaded] = useFonts({
    'YekanBakh-Regular': require('./app/assets/fonts/YekanBakh-Regular.ttf')
  })

  if(!fontsLoaded){
    return <AppLoading />;
  }
  return (
          <Navigator />

  )
}

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: colors.black,
//     alignItems: 'center',
//     justifyContent: 'center',
//     fontFamily: 'YekanBakh-Regular'
//   },
//   Text:{
//     fontSize: 23,
//     color: colors.purple,
//     fontFamily: 'YekanBakh-Regular',
//     paddingBottom: 20
//   }, 
//   Image: {
//     width: 300 ,
//   },
//   Input: {
//     width: 300,
//     padding: 15,
//     borderWidth : 1,
//     borderColor: colors.purple,
//     borderRadius: 20,
//     shadowColor: colors.purple,
//     shadowOffset: {width: 2, height: 2},
//     shadowOpacity: 0.5,
//     shadowRadius: 20,
//     shadowColor: colors.purple,
//     elevation: 10,
//     backgroundColor: colors.purple,
//     fontSize: 20,
//     color: colors.white,
//     fontFamily: 'YekanBakh-Regular',
//     marginBottom: 50,
//     textAlign: "center"
//   },
//   Button:{
//     backgroundColor: colors.blue,
//     width: 300,
//     fontSize: 30,
//     textAlign: 'center',
//     padding: 10,
//     borderRadius: 20,
//     shadowColor: colors.blue,
//     shadowOffset: {width: 2, height: 2},
//     shadowOpacity: 0.5,
//     shadowRadius: 20,
//     shadowColor: colors.blue,
//     elevation: 10,
//   }
// });

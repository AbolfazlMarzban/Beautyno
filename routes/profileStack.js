import { createStackNavigator } from "react-navigation-stack"
import { createAppContainer } from "react-navigation"
import Profile from '../app/screens/profileScreen'
import csProfileData from "../app/screens/csProfileData";
import profileOrders from "../app/screens/profileOrders";
import support from "../app/screens/support";
// import 'react-native-gesture-handler';
 

const screens = {   
    Profile : {
        screen : Profile,
        navigationOptions: {
            // title: 'بازگشت',
            // headerTintColor: '#fff',
            // headerStyle : {backgroundColor: 'black', color: 'white'}
            header: null,
          }
    },
    csProfileData:{
        screen: csProfileData,
        navigationOptions: {
            header: null,
          }
    },
    profileOrders:{
        screen: profileOrders,
        navigationOptions:{
            header: null
        }
    },
    support: {
        screen: support,
        navigationOptions: {
            header: null
        }
    }


}
const ProfileStack = createStackNavigator(screens)


export default createAppContainer(ProfileStack)
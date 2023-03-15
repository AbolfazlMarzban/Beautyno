import { createStackNavigator } from "react-navigation-stack"
import { createAppContainer } from "react-navigation"
import Order from '../app/screens/order'
import Cart from '../app/screens/cartScreen'
import 'react-native-gesture-handler';


const screens = {
    Cart : {
        screen : Cart,
        navigationOptions: {
            // title: 'بازگشت',
            // headerTintColor: '#fff',
            // headerStyle : {backgroundColor: 'black', color: 'white'}
            header: null,
          }
    },
    Order:{
        screen: Order,
        navigationOptions: {
            header: null,
          }
    },



}
const CartStack = createStackNavigator(screens)


export default createAppContainer(CartStack)
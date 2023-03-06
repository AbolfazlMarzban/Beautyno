import { createStackNavigator } from "react-navigation-stack"
import { createAppContainer } from "react-navigation"
import Login from '../app/screens/login'
import Home from '../app/screens/home'

const screens = {
    Login:{
        screen: Login,
        navigationOptions: {
            header: null,
          }
    },
    Home : {
        screen : Home,
        navigationOptions: {
            // title: 'بازگشت',
            // headerTintColor: '#fff',
            // headerStyle : {backgroundColor: 'black', color: 'white'}
            header: null,
          }
    }
}
const HomeStack = createStackNavigator(screens)


export default createAppContainer(HomeStack)
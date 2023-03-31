import { createDrawerNavigator } from "react-navigation-drawer";
import { createAppContainer } from "react-navigation";
import HomeStack from "./homeStack";
import AboutStack from "./aboutStack";
// import 'react-native-gesture-handler';


const RootDrawerNavigator = createDrawerNavigator({
    Home:{
        screen: HomeStack
    }, 
    About:{
        screen: AboutStack
    }
})


export default createAppContainer(RootDrawerNavigator)
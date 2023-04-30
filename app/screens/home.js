import React from 'react';
import Ionic from "react-native-vector-icons/Ionicons"
import {NavigationContainer} from '@react-navigation/native'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import HomeScreen from './homeScreen';
import Profile from './profile';
import Search from './search';  
import Cart from './cart';
import Favourites from './favourites';
import colors from '../config/colors';
// import 'react-native-gesture-handler';


function home(props) {
    const Tab = createBottomTabNavigator()
    return (
        <NavigationContainer>
            <Tab.Navigator 
                screenOptions={({route}) => ({
                    tabBarIcon: ({focused, size, color}) => {
                        let iconName
                        if(route.name == "Home"){
                            iconName = focused ? "home" : "home-outline"
                        } else if (route.name == "Profile"){
                            iconName = focused ? "person-circle-sharp" : "person-circle-outline"
                        } else if(route.name == "Search"){
                            iconName = focused ? "search-circle" : "search-circle-outline"
                        } else if(route.name == "Cart"){
                            iconName = focused ? "cart" : "cart-outline"
                        } else if(route.name == "Favourites"){
                            iconName = focused ? "heart" : "heart-outline"
                        }
                        return <Ionic name={iconName} size={35} color={colors.white} />
                    },
                    tabBarStyle: {
                        backgroundColor: '#000',
                        height: 60
                      }
                })}
                tabBarOptions={{
                    activeTintColor: colors.white,
                    inactiveTintColor:colors.white,
                    showLabel: false
                }
                }
            >
                <Tab.Screen name="Home" component={HomeScreen} options={{headerShown: false}}></Tab.Screen>
                <Tab.Screen name="Search" component={Search} options={{headerShown: false}}></Tab.Screen>
                <Tab.Screen name="Cart" component={Cart} options={{headerShown: false}}></Tab.Screen>
                <Tab.Screen name="Favourites" component={Favourites} options={{headerShown: false}}></Tab.Screen>
                <Tab.Screen name="Profile" component={Profile}  options={{headerShown: false}}></Tab.Screen>
            </Tab.Navigator>
        </NavigationContainer>
    )
}
export default home;
import React from 'react';
import { Text, View, StyleSheet } from 'react-native'
import Ionic from "react-native-vector-icons/Ionicons"
import {NavigationContainer} from '@react-navigation/native'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import homeScreen from './homeScreen';
import profile from './profile';
import search from './search';
import cart from './cart';
import favourites from './favourites';
import colors from '../config/colors';

function home(props) {
    const Tab = createBottomTabNavigator()
    return (
        <NavigationContainer>
            <Tab.Navigator 
                screenOptions={({route}) => ({
                    tabBarIcon: ({focused, size, color}) => {
                        let iconName;
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
                        return <Ionic name={iconName} size={size} colour={color} />
                    }
                })}
                tabBarOptions={{
                    activeTintColor: colors.purple,
                    inactiveTintColor:colors.purple,
                    showLabel: true,
                    style: {
                        backgroundColor: '#f9f9f9',
                        height: 60,
                    },
                }
                }
            >
                <Tab.Screen name="Home" component={homeScreen} options={{headerShown: false}}></Tab.Screen>
                <Tab.Screen name="Search" component={search} options={{headerShown: false}}></Tab.Screen>
                <Tab.Screen name="Cart" component={cart} options={{headerShown: false}}></Tab.Screen>
                <Tab.Screen name="Favourites" component={favourites} options={{headerShown: false}}></Tab.Screen>
                <Tab.Screen name="Profile" component={profile}  options={{headerShown: false}}></Tab.Screen>
            </Tab.Navigator>
        </NavigationContainer>
    );
}

const styles = StyleSheet.create({
Tab:{
    backgroundColor: colors.black,
    color: colors.black
}
})


export default home;
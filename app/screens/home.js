import React from 'react';
import { Text, View } from 'react-native'
import Ionic from "react-native-vector-icons/Ionicons"
import {NavigationContainer} from '@react-navigation/native'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import homeScreen from './homeScreen';
import profile from './profile';


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
                        }
                        return <Ionic name={iconName} size={size} colour={color} />
                    }
                })}
                tabBarOptions={{
                    activeTintColor: 'black',
                    inactiveTintColor: 'black',
                    showLabel: false,
                    style: {
                        backgroundColor: '#ffc125',
                        height: 60,
                    },
                }
                }
            >
                <Tab.Screen name="Home" component={homeScreen}></Tab.Screen>
                <Tab.Screen name="Profile" component={profile}></Tab.Screen>
            </Tab.Navigator>
        </NavigationContainer>
    );
}

export default home;
import { createAppContainer, createSwitchNavigator } from 'react-navigation';
import { createBottomTabNavigator } from 'react-navigation-tabs';
import { createStackNavigator } from 'react-navigation-stack';
import { fadeOut } from 'react-navigation-transitions';
import { Ionicons } from '@expo/vector-icons';//icons for the app

import React from 'react';

import HomeScreen from './screens/Home';
import SettingsScreen from './screens/Settings'; //routing
import LoginScreen from './screens/Login';

const AuthNavigator = createSwitchNavigator ( 
  {
    Login: LoginScreen
  },
  {
    initialRouteName: 'Login' //setting inital page
  }
);

const HomeNavigator = createBottomTabNavigator(//creating bottom navigation
  {
    Home: { screen: HomeScreen,
      navigationOptions: {
        tabBarIcon: ({tintColor}) => <Ionicons name="ios-home" size={32} color={tintColor} />//adding icons
        }, 
      },
    Jokes: { screen: SettingsScreen,
      navigationOptions: {
        tabBarIcon: ({tintColor}) => <Ionicons name="md-thumbs-up" size={32} color={tintColor} />
        },
      },
    },
  {
    initialRouteName: 'Home'
  },
)

//entry point
export default createAppContainer(
  createStackNavigator(
    {
      App: HomeNavigator,
      Auth: AuthNavigator
    },
    {
      initialRouteName: 'Auth', //Beggining page
      transitionConfig: () => fadeOut(), //navigation animation
      headerMode: 'none',

      navigationOptions: {
        headerVisible: false,
      },

      defaultNavigationOptions: {
        gesturesEnabled: true, //adding swipe back feauture
      },
    }
  )
);
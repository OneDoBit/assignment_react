import { createAppContainer, createSwitchNavigator } from 'react-navigation';
import { createBottomTabNavigator } from 'react-navigation-tabs';
import { createStackNavigator, HeaderTitle } from 'react-navigation-stack';
import { fromLeft, zoomIn, flipX, flipY, zoomOut, fadeOut } from 'react-navigation-transitions';
import { Ionicons } from '@expo/vector-icons';
// import Icon from 'react-native-vector-icons/FontAwesome';

import React, { Component } from 'react';

import HomeScreen from './screens/Home';
import SettingsScreen from './screens/Settings';
import LoginScreen from './screens/Login';

// Switch Navigator
const AuthNavigator = createSwitchNavigator ( 
  {
    Login: LoginScreen
  },
  {
    initialRouteName: 'Login'
  }
);

// Tab Navigator
const HomeNavigator = createBottomTabNavigator(
  {
    Home: { screen: HomeScreen,
      navigationOptions: {
        tabBarIcon: ({tintColor}) => <Ionicons name="ios-home" size={32} color={tintColor} />,
        }, 
      },
    About: { screen: SettingsScreen,
      navigationOptions: {
        activeTintColor: '#black',
        tabBarIcon: ({tintColor}) => <Ionicons name="ios-person" size={32} color={tintColor} />
        },
      },
  },
  {
    initialRouteName: 'Home'
  },
)

// app entry point
export default createAppContainer( // must have this wrapper (function) to have a starting point for the navigators
  createStackNavigator(
    {
      App: HomeNavigator,
      Auth: AuthNavigator
    },
    {
      initialRouteName: 'Auth', // which screen / navigations stack to begin with (string name is sensitive)
      transitionConfig: () => fadeOut(), // screen to screen transitions
      headerMode: 'none',

      navigationOptions: {
        headerVisible: false,
        showIcon: true,
      },

      defaultNavigationOptions: { // remove swipe back gesture
        gesturesEnabled: true,
        showIcon: true 
      },

      tabBarOptions: {
      }, 
    }
  )
);
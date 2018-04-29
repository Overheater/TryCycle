import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View
} from 'react-native';
import { DrawerNavigator, StackNavigator,TabBarBottom, TabNavigator } from 'react-navigation'
import Ionicons from 'react-native-vector-icons/Ionicons';

import Twoweeks from './twoweeks';
import Welcome from './Welcome';
import AddATransport from './addAtransport';
import AddPTransport from './addPtransport';
import AddCarpool from './addCarpool';
import AddTripChaining from './addTripChaining';
import About from './about';
import Achievement from './Acievements'
const HomePage = StackNavigator({
  Home: {
      screen: Welcome
  },
  ATransport:{
    screen:AddATransport
  },
  PTransport: {
      screen: AddPTransport
  },
  Carpool: {
      screen: AddCarpool
  },
  TripChaining: {
    screen: AddTripChaining
  },
  About:{
    screen: About
  },
  Achievement:{
    screen: Achievement
  }
})
export const Tabs= TabNavigator({
  Home:{screen: HomePage},
  Journal: { screen: Twoweeks},
},  {
  navigationOptions: ({ navigation }) => ({
    tabBarIcon: ({ focused, tintColor }) => {
      const { routeName } = navigation.state;
      let iconName;
      if (routeName === 'Journal') {
        iconName = `md-bookmarks`;
      } else if (routeName === 'Home') {
        iconName = `ios-home`;
      } 

      return <Ionicons name={iconName} size={25} color={tintColor} />;
    },
  }),
  tabBarOptions: {
    activeTintColor: '#D85733',
    inactiveTintColor: '#FFF1D3',          
    style: {
      backgroundColor: 'gray',
    },
    
  },
  
  tabBarComponent: TabBarBottom,
  tabBarPosition: 'bottom',
  animationEnabled: true,
  swipeEnabled: true,
}
);

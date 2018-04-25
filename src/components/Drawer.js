import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View
} from 'react-native';
import { DrawerNavigator, StackNavigator,TabBarBottom, TabNavigator } from 'react-navigation'
import Ionicons from 'react-native-vector-icons/Ionicons';
import Addactivity from './addactivity'
import Twoweeks from './twoweeks'
import Welcome from './Welcome';
export const Tabs= TabNavigator({
  Home:{screen: Welcome},
  Journal: { screen: Twoweeks},
  NewTrip: {screen: Addactivity}

},  {
  navigationOptions: ({ navigation }) => ({
    tabBarIcon: ({ focused, tintColor }) => {
      const { routeName } = navigation.state;
      let iconName;
      if (routeName === 'Journal') {
        iconName = `md-bookmarks`;
      } else if (routeName === 'Home') {
        iconName = `ios-home`;
      } else if (routeName === 'NewTrip') {
        iconName = `md-add`;
      }

      // You can return any component that you like here! We usually use an
      // icon component from react-native-vector-icons
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
export const Drawer = DrawerNavigator({
    LastTwoWeeks: { screen: Twoweeks },
    Addactivity: { screen: Addactivity },
  },
)
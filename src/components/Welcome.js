import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View
} from 'react-native';
import {TabNavigator,TabBarBottom, StackNavigator,NavigationActionStatusBar,navigationOptions } from 'react-navigation';
import Styles from '../styles/Styles';

const instructions = Platform.select({
  ios: 'Press Cmd+R to reload,\n' +
    'Cmd+D or shake for dev menu',
  android: 'Double tap R on your keyboard to reload,\n' +
    'Shake or press menu button for dev menu',
});


export default class Welcome extends Component<> {
    static navigationOptions = {
        title: 'Home',
      };
  render() {
    return (
      <View style={Styles.container}>
      <Text>
        Welcome to  Trycycle!
      </Text>
      <Text>
        Please select one of the trip types below to start journaling.
      </Text>
      </View>
    );
  }
}
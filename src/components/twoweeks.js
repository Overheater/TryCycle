/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View,
  AsyncStorage
} from 'react-native';
import {TabNavigator,TabBarBottom, StackNavigator,NavigationAction} from 'react-navigation';
import Styles from '../styles/Styles';

const instructions = Platform.select({
  ios: 'Press Cmd+R to reload,\n' +
    'Cmd+D or shake for dev menu',
  android: 'Double tap R on your keyboard to reload,\n' +
    'Shake or press menu button for dev menu',
});


export default class Twoweeks extends Component<> {
  componentDidMount = () ⇒ AsyncStorage.getItem('name').then((value) 
  ⇒ this.setState({ 'name': value }))
  render() {
    return (
      <View style={Styles.container}>
        <Text style={Styles.welcome}>
          Welcome to React Native!
        </Text>
        <Text style={Styles.instructions}>
          To get started, edit App.js
        </Text>
        <Text style={Styles.instructions}>
          {instructions}
        </Text>
      </View>
    );
  }
}
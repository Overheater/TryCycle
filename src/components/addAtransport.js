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
  View
} from 'react-native';
import {TabNavigator,TabBarBottom, StackNavigator,NavigationAction} from 'react-navigation';
import { Container, Header, Left, Body, Right, Button, Icon, Title,  Form, Item, Input, Label } from 'native-base';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Styles from '../styles/Styles';

const instructions = Platform.select({
  ios: 'Press Cmd+R to reload,\n' +
    'Cmd+D or shake for dev menu',
  android: 'Double tap R on your keyboard to reload,\n' +
    'Shake or press menu button for dev menu',
});


export default class Atransport extends Component<> {
  static navigationOptions = {
    title: 'New Entry',
    headerStyle: {
      backgroundColor: '#f4511e',
    },};
  render() {
    return (
        <Container>
        <Header>
          <Left>
          <Button transparent
          
          >
              <Icon name='menu' />
              
            </Button>
          </Left>
          <Body>
            <Title>Add a trip</Title>
          </Body>
        </Header>
        <Form>
            <Item inlineLabel>
              <Label>Trip Name</Label>
              <Input />
            </Item>
            </Form>
            <Form>
            <Item inlineLabel>
              <Label>Description</Label>
              <Input />
            </Item>
            </Form>
      </Container>
    );
  }
}
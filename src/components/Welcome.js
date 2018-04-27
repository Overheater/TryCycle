import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  View
} from 'react-native';
import {
  Body,
  Button,
  Container,
  Content,
  Footer,
  FooterTab,
  Header,
  Icon,
  Left,
  Right,
  Title,
  Text
} from 'native-base';
import {TabNavigator,TabBarBottom, StackNavigator,NavigationActionStatusBar,navigationOptions,NavigationAction } from 'react-navigation';
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
      <Container>

      <Content>
      <Text>
        Welcome to  Trycycle!
      </Text>
      <Text>
        Please select one of the trip types below to start journaling.
      </Text>
      <View style={Styles.buttonBar}>
        <Button  large
            onPress={() =>this.props.navigation.navigate('TripChaining')}
          >
            <Text style={{color:"white"}}>Trip Chaining</Text>
        </Button> 
        <Button  large
            onPress={() =>this.props.navigation.navigate('Carpooling')}
          >
            <Text style={{color:"white"}}>Carpool</Text>
        </Button>  
          </View >
          <View style={Styles.buttonBar}>
        <Button  large
            onPress={() =>this.props.navigation.navigate('PublicTransport')}
          >
            <Text style={{color:"white"}}>Public Transport</Text>
        </Button> 
        <Button  large
            onPress={() =>this.props.navigation.navigate('ActiveTransport')}
          >
            <Text style={{color:"white"}}>Active Transport</Text>
        </Button>  
          </View >     
      </Content>
      </Container>
    );
  }
}
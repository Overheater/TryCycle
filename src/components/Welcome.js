import React, { Component } from 'react';
import {
  Platform,
  Alert,
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
import store from 'react-native-simple-store';

const instructions = Platform.select({
  ios: 'Press Cmd+R to reload,\n' +
    'Cmd+D or shake for dev menu',
  android: 'Double tap R on your keyboard to reload,\n' +
    'Shake or press menu button for dev menu',
});


export default class Welcome extends Component<> {
    static navigationOptions = {
        title: 'Home',
        headerStyle: {
          backgroundColor: 'rgb(0,141,168)',
        },
        headerTintColor: '#fff',
        headerTitleStyle: {
          fontWeight: 'bold',
        },
      };
      componentWillMount(){
        if(store.get('trips')===null){
          console.log("trips isn't here")
          store.save('trips',[])
        }
        Alert.alert(
          "extra feature",
          String("app uses sound effects to confirm new Trip"),
          [
            {text: 'OK', onPress: () => console.log('OK Pressed')},
          ],
          { cancelable: false }
        );
      }
  render() {
    return (
      <Container>

      <Content>
      <Text style={Styles.instructions}>
        Welcome to  Trycycle!
      </Text>
      <Text style={Styles.instructions}>
        Please select one of the trip types below to start journaling.
      </Text>
      <View style={Styles.buttonBar}>
        <Button  full
            onPress={() =>this.props.navigation.navigate('TripChaining')}
          >
            <Text style={{color:"white"}}>Trip Chaining</Text>
        </Button> 
        <Button  full
            onPress={() =>this.props.navigation.navigate('Carpool')}
          >
            <Text style={{color:"white"}}>Carpool</Text>
        </Button>  
          </View >
          <View style={Styles.buttonBar}>
        <Button  full
            onPress={() =>this.props.navigation.navigate('PTransport')}
          >
            <Text style={{color:"white"}}>Public Transport</Text>
        </Button> 
        <Button  full
            onPress={() =>this.props.navigation.navigate('ATransport')}
          >
            <Text style={{color:"white"}}>Active Transport</Text>
        </Button>  
          </View >     
      </Content>
      </Container>
    );
  }
}
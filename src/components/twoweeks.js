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
  AsyncStorage,
  FlatList
} from 'react-native';
import {
  Body,
  Button,
  Container,
  Content,
  Footer,
  Card,
  CardItem,
  FooterTab,
  Header,
  Icon,
  Left,
  Right,
  Title,
  Toast 
} from 'native-base';
import {TabNavigator,TabBarBottom, StackNavigator,NavigationActionStatusBar,navigationOptions,NavigationAction } from 'react-navigation';
import Styles from '../styles/Styles';
import {Trip} from '../models/Trip';

const instructions = Platform.select({
  ios: 'Press Cmd+R to reload,\n' +
    'Cmd+D or shake for dev menu',
  android: 'Double tap R on your keyboard to reload,\n' +
    'Shake or press menu button for dev menu',
});


export default class Twoweeks extends Component<> {
  static navigationOptions = {
    title: 'Journal',
    headerStyle: {
      backgroundColor: 'rgb(0,141,168)',
    },
    headerTintColor: '#fff',
    headerTitleStyle: {
      fontWeight: 'bold',
    },
  };
  constructor(props)
  {
    super(props);
    this.state = { Data:null};

  }
  donothing(){

  }

  componentWillMount(){

    console.log("this is the welcome component");
    AsyncStorage.getItem('trips')
    .then((item) => {
      console.log("this is in the async storage in  the journal");
      console.log(JSON.parse(item));
      this.setState({Data:(JSON.parse(item))})
    }).catch(error=>console.log("error"));
    console.log("this is the outside");

}

_renderTrips() {
  console.log("in the renderTrips functions");
  console.log(this.state.Data);
    return (<FlatList
      data = {this.state.Data}
      extraData={this.state.Data}
      keyExtractor = {(item, index) => item.name}
      renderItem={this._renderItem}
    />) 
}

_renderItem = ({item}) => {
  console.log("in the render item function");
  return (
  <Card>
  <CardItem 
      button
      onPress={()=>this.deleteItem(item.ID)}
  >
      <Text>{item.Name}</Text>
      <Right>
          <Icon name="md-trash"/>
      </Right>
  </CardItem>
</Card>
  );
}
 async deleteItem(value){
  var starter = await AsyncStorage.getItem("trips")
  .then((item) => {
  var items = JSON.parse(item);
  console.log(items);
  for (var i =0; i< items.length; i++) {
    var iteminquestion = items[i];
    console.log(iteminquestion.ID);
    console.log(value);
    if (iteminquestion.ID == value) {
        items.splice(i, 1);
    }
}

newtrips = JSON.stringify(items);
this.setState({Data:(JSON.parse(newtrips))});
AsyncStorage.setItem("trips", newtrips);
}).catch(error=>console.log("error"));
}
  render() {
    return(
      <Container>
        <Content>
        {this.state.Data != null ? this._renderTrips() : <Text >Your on phone data does not work.. your phone is probably Android 7.0 or above</Text>}
        </Content>
    </Container>)
  }
}
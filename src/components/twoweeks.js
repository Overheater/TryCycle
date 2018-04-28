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
  Title
} from 'native-base';
import {TabNavigator,TabBarBottom, StackNavigator,NavigationAction} from 'react-navigation';
import Styles from '../styles/Styles';

const instructions = Platform.select({
  ios: 'Press Cmd+R to reload,\n' +
    'Cmd+D or shake for dev menu',
  android: 'Double tap R on your keyboard to reload,\n' +
    'Shake or press menu button for dev menu',
});


export default class Twoweeks extends Component<> {
  constructor(props)
  {
    super(props);
    this.state = { Data:null};

  }
  componentWillMount(){
    //push the array into a state variable then go from there to find it, like in the movie app
    /*async(dispatch)=>{
    try {
       let value = await AsyncStorage.getItem('trips');
       if (value !=null){
         console.log("Array not found");
        var trip=[];
        const trips =JSON.stringify(trip);
        return AsyncStorage.setItem("trips",trips)
        .then(json => console.log('success!'))
        .catch(error => console.log('error!'));
      }
       else {
        console.log("Array found");
        return AsyncStorage.getItem('trips')
        .then(req => JSON.parse(req))
        .then(json => console.log(json))
        .catch(error => console.log('error!'));
      }
    } 
    catch (error) {
              console.log("we have a problem with the trips array, fix it")
                  }
    }*/
    console.log("this is the welcome component");
    AsyncStorage.getItem('trips')
    .then((item) => {
      console.log("this is in the async storage");
      
     if (item) {
      console.log("Array found");
      this.setState({data:(item.parse())})
               }
     else{
      console.log("Array not found")
     }
    }).catch(error=>console.log("error"));
    console.log("this is the outside");
 /* Alert.alert(
    "extra feature",
    String("app uses sound effects to confirm new Trip"),
    [
      {text: 'OK', onPress: () => console.log('OK Pressed')},
    ],
    { cancelable: false }
  );*/
}
_renderTrips() {
  AsyncStorage.getItem('trips')
  .then((item) => {
    return (<FlatList
      data = {item}
      keyExtractor = {(item, index) => item.title}
      renderItem={this._renderItem}
    />)
   })
}

_renderItem = ({item}) => {
  return (
  <Card>
  <CardItem 
      button
      onPress={()=>donothing()}
  >
      <Text>{item.getName()}</Text>
      <Right>
          <Icon name="ios-arrow-forward" />
      </Right>
  </CardItem>
</Card>
  );
}
donothing(){
    
}
  render() {
    return(
      <Container>
        {this.state.data != null ? this._renderTrips() : <Text >Sacrificing to the movie God...</Text>}
    </Container>)
  }
}
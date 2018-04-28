/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  Alert,
  Platform,
  StyleSheet,
  Text,
  View,
  ScrollView,
  Keyboard,
  TextInput,
  TouchableWithoutFeedback,
  KeyboardAvoidingView,
  FlatList,
  AsyncStorage
} from 'react-native';
import {TabNavigator,TabBarBottom, StackNavigator,NavigationAction} from 'react-navigation';
import { Container, Header, Left, Body, Right, Button, Icon, Title,  Form, Item, Input, Label } from 'native-base';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Styles from '../styles/Styles';
import { Trip } from '../models/Trip';


const instructions = Platform.select({
  ios: 'Press Cmd+R to reload,\n' +
    'Cmd+D or shake for dev menu',
  android: 'Double tap R on your keyboard to reload,\n' +
    'Shake or press menu button for dev menu',
});

var Sound = require('react-native-sound');
Sound.setCategory('Playback');
var Ting = new Sound('ting.mp3', Sound.MAIN_BUNDLE, (error) => {
  if (error) {
    console.log('failed to load the sound', error);
    return;
  }
  // loaded successfully
  console.log('duration in seconds: ' + Ting.getDuration() + 'number of channels: ' + Ting.getNumberOfChannels());
});
Ting.play((success) => {
  if (success) {
    console.log('successfully finished playing');
  } else {
    console.log('playback failed due to audio decoding errors');
    // reset the player to its uninitialized state (android only)
    // this is the only option to recover after an error occured and use the player again
    Ting.reset();
  }
});
export default class TripChaining extends Component<> {
  constructor(props)
  {
    super(props);
    this.state = { Name: '',Description:'',Quantity:''};

  }
  createTrip(){
    console.log("hey");
    var Date1=new Date();
    var listsize=0;
    AsyncStorage.getItem('lists')
  .then((lists) => {
    const l = lists ? JSON.parse(lists) : [];
    listsize=l.length;
    console.log(listsize);
    var tripin=new Trip((listsize+1),this.state.Name,Date1,"a",this.state.Quantity,this.state.Description);
    l.push(tripin);
    console.log({tripin});
    AsyncStorage.setItem('lists', JSON.stringify(l));
    this.props.navigation.navigate('Home');
  });
 console.log(this.state.Name);
 console.log({Date1});
  Ting.play();
  }
  donothing(){
    
  }
    static navigationOptions = {
        title: 'Trip Chaining',
        headerStyle: {
          backgroundColor: 'rgb(0,141,168)',
        },
        headerTintColor: '#fff',
        headerTitleStyle: {
          fontWeight: 'bold',
        },
      };
  render() {
    return (
        <Container>
        <TextInput
          style={{width: 350,height: 55, borderBottomColor: Platform.OS === 'ios' ? 'black' : null, borderBottomWidth: Platform.OS === 'ios' ? 1 : null}}
          placeholder='Trip Name'
          returnKeyLabel="none"
          value={this.state.Name}
          onChangeText={(intext) => this.setState({Name:intext})}
          onSubmitEditing={()=>this.donothing()}/>
          <TextInput
          style={{width: 350,height: 55, borderBottomColor: Platform.OS === 'ios' ? 'black' : null, borderBottomWidth: Platform.OS === 'ios' ? 1 : null}}
          placeholder='Description'
          returnKeyLabel="none"
          value={this.state.Description}
          onChangeText={(newtext) => this.setState({Description:newtext})}
          onSubmitEditing={()=>this.donothing()}/>
          <TextInput
          style={{width: 350,height: 55, borderBottomColor: Platform.OS === 'ios' ? 'black' : null, borderBottomWidth: Platform.OS === 'ios' ? 1 : null}}
          placeholder='How many errands did you complete?'
          returnKeyLabel="none"
          keyboardType="numeric"
          value={this.state.Quantity}
          onChangeText={(othertext) => this.setState({Quantity:othertext})}
          onSubmitEditing={()=>this.donothing()}/>

            <Button  full
            onPress={() =>this.createTrip()}
          >
            <Text style={{color:"white"}}>submit</Text>
        </Button>  
      </Container>
    );
  }
}
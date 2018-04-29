import React, { Component } from 'react';
import {
  Platform,
  Alert,
  StyleSheet,
  View,
  AsyncStorage
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
export default class Twoweeks extends Component<> {
  static navigationOptions = {
    title: 'Achievement',
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
      console.log("this is in the async storage in  the journal");
      console.log(JSON.parse(item));
      this.setState({Data:(JSON.parse(item))})
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
render() {
    return (
<View style={Styles.welcome}>
<Text> hey</Text>
</View>
    )}
}
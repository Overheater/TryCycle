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

const instructions = Platform.select({
  ios: 'Press Cmd+R to reload,\n' +
    'Cmd+D or shake for dev menu',
  android: 'Double tap R on your keyboard to reload,\n' +
    'Shake or press menu button for dev menu',
});


export default class Welcome extends Component<> {
    static navigationOptions = {
        title: 'Home',
        headerRight: (
          <Button
            onPress={() => this.props.navigation.navigate('About')}
            title="Info"
            color="#fff"
          />),
        headerStyle: {
          backgroundColor: 'rgb(0,141,168)',
        },
        headerTintColor: '#fff',
        headerTitleStyle: {
          fontWeight: 'bold',
        },
      };
      componentDidMount(){
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
                     }
           else{
            console.log("Array not found");
            var trip=[];
            const trips =JSON.stringify(trip);
            return AsyncStorage.setItem("trips",trips)
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
        <Button  full style={{padding:5}}
            onPress={() =>this.props.navigation.navigate('TripChaining')}
          >
            <Text style={{color:"white"}}>Trip Chaining</Text>
        </Button> 
        <Button  full style={{padding:5}}
            onPress={() =>this.props.navigation.navigate('Carpool')}
          >
            <Text style={{color:"white"}}>Carpool</Text>
        </Button>  
          </View >
          <View style={Styles.buttonBar}>
        <Button  full style={{padding:5}}
            onPress={() =>this.props.navigation.navigate('PTransport')}
          >
            <Text style={{color:"white"}}>Public Transport</Text>
        </Button> 
        <Button  full style={{padding:5}}
            onPress={() =>this.props.navigation.navigate('ATransport')}
          >
            <Text style={{color:"white"}}>Active Transport</Text>
        </Button>  
        <Button  full style={{padding:5}}
            onPress={() =>this.props.navigation.navigate('About')}
          >
            <Text style={{color:"white"}}>About</Text>
        </Button> 
        <Button  full style={{padding:5}}
            onPress={() =>this.props.navigation.navigate('Achievement')}
          >
            <Text style={{color:"white"}}>Achievements</Text>
        </Button> 
          </View >     
      </Content>
      </Container>
    );
  }
}
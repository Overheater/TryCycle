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
  FlatList
} from 'react-native';
import {TabNavigator,TabBarBottom, StackNavigator,NavigationAction} from 'react-navigation';
import { Container, Header, Left, Body, Right, Button, Icon, Title,  Form, Item, Input, Label } from 'native-base';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Styles from '../styles/Styles';
import { Trip } from '../models/Trip';
export default class Twoweeks extends Component<> {
    static navigationOptions = {
        title: 'About',
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
<Text style={Styles.welcome}>Trycycle</Text>
<Text style={Styles.welcome}>Made By Ian Pougher</Text>
<Text style={Styles.welcome}>The Extra feature is sound effects, they play when a new trip is added</Text>

        )
    }
    
    
    
    }
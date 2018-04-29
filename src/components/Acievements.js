import React, { Component } from 'react';
import {
  Platform,
  Alert,
  StyleSheet,
  View,
  AsyncStorage,
  Text
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
  
} from 'native-base';
import {TabNavigator,TabBarBottom, StackNavigator,NavigationActionStatusBar,navigationOptions,NavigationAction } from 'react-navigation';
import Styles from '../styles/Styles';
export default class Achievements extends Component<> {
  static navigationOptions = {
    title: 'Achievements',
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
      this.state = { Data:null,tripTotal:0,TripSaveTotal:0};
  
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
      this.setstatevalues();
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
/*_renderachievments(){
  render(){
  if(this.state.tripTotal<50 && this.state.tripsSaved<100){
return(
  <View style={Styles.welcome}>
<Text style={Styles.achievementtext}>beginner Tripper</Text>
<Text style={Styles.achievementinfo}> you have completed {this.state.tripTotal} of the 50 needed</Text>
<Text style={Styles.achievementtext}>intermediate Tripper</Text>
<Text style={Styles.achievementinfo}> you have completed {this.state.tripTotal} of the 100 needed</Text>
<Text style={Styles.achievementtext}>Advanced Tripper</Text>
<Text style={Styles.achievementinfo}> you have completed {this.state.tripTotal} of the 200 needed</Text>
<Text style={Styles.achievementtext}>Tripsaver</Text>
<Text style={Styles.achievementinfo}> you have completed {this.state.tripsSaved} of the 100 needed</Text>
</View>
)
  }
  else if (this.state.tripTotal>=50 && this.state.tripTotal<100&& this.state.tripsSaved<100){
    return(
    <View style={Styles.welcome}>
    <Text style={Styles.achievementtext}>beginner Tripper</Text>
    <Text style={Styles.achievementinfo}> you have successfully completed 50 Trips!</Text>
    <Text style={Styles.achievementtext}>intermediate Tripper</Text>
    <Text style={Styles.achievementinfo}> you have completed {this.state.tripTotal} of the 100 needed</Text>
    <Text style={Styles.achievementtext}>Advanced Tripper</Text>
    <Text style={Styles.achievementinfo}> you have completed {this.state.tripTotal} of the 200 needed</Text>
    <Text style={Styles.achievementtext}>Tripsaver</Text>
    <Text style={Styles.achievementinfo}> you have completed {this.state.tripsSaved} of the 100 needed</Text>
    </View>
    )
  }
  else if (this.state.tripTotal>=100 && this.state.tripTotal<200&& this.state.tripsSaved<100){
    return(
    <View style={Styles.welcome}>
    <Text style={Styles.achievementtext}>beginner Tripper</Text>
    <Text style={Styles.achievementinfo}> you have successfully completed 50 Trips!</Text>
    <Text style={Styles.achievementtext}>intermediate Tripper</Text>
    <Text style={Styles.achievementinfo}>you have successfully completed 100 Trips!</Text>
    <Text style={Styles.achievementtext}>Advanced Tripper</Text>
    <Text style={Styles.achievementinfo}> you have completed {this.state.tripTotal} of the 200 needed</Text>
    <Text style={Styles.achievementtext}>Tripsaver</Text>
    <Text style={Styles.achievementinfo}> you have completed {this.state.tripsSaved} of the 100 needed</Text>
    </View>
    )
  }
  else if (this.state.tripTotal>=200 && this.state.tripsSaved<100){
    return(
    <View style={Styles.welcome}>
    <Text style={Styles.achievementtext}>beginner Tripper</Text>
    <Text style={Styles.achievementinfo}> you have successfully completed 50 Trips!</Text>
    <Text style={Styles.achievementtext}>intermediate Tripper</Text>
    <Text style={Styles.achievementinfo}>you have successfully completed 100 Trips!</Text>
    <Text style={Styles.achievementtext}>Advanced Tripper</Text>
    <Text style={Styles.achievementinfo}>you have successfully completed 200 Trips!</Text>
    <Text style={Styles.achievementtext}>Tripsaver</Text>
    <Text style={Styles.achievementinfo}> you have completed {this.state.tripsSaved} of the 100 needed</Text>
    </View>
    )
  }
  if(this.state.tripTotal<50 && this.state.tripsSaved>=100){
    return(
      <View style={Styles.welcome}>
    <Text style={Styles.achievementtext}>beginner Tripper</Text>
    <Text style={Styles.achievementinfo}> you have completed {this.state.tripTotal} of the 50 needed</Text>
    <Text style={Styles.achievementtext}>intermediate Tripper</Text>
    <Text style={Styles.achievementinfo}> you have completed {this.state.tripTotal} of the 100 needed</Text>
    <Text style={Styles.achievementtext}>Advanced Tripper</Text>
    <Text style={Styles.achievementinfo}> you have completed {this.state.tripTotal} of the 200 needed</Text>
    <Text style={Styles.achievementtext}>Tripsaver</Text>
    <Text style={Styles.achievementinfo}> You have successfully save 100 trips!</Text>
    </View>
    )
      }
      else if (this.state.tripTotal>=50 && this.state.tripTotal<100&& this.state.tripsSaved>=100){
        return(
        <View style={Styles.welcome}>
        <Text style={Styles.achievementtext}>beginner Tripper</Text>
        <Text style={Styles.achievementinfo}> you have successfully completed 50 Trips!</Text>
        <Text style={Styles.achievementtext}>intermediate Tripper</Text>
        <Text style={Styles.achievementinfo}> you have completed {this.state.tripTotal} of the 100 needed</Text>
        <Text style={Styles.achievementtext}>Advanced Tripper</Text>
        <Text style={Styles.achievementinfo}> you have completed {this.state.tripTotal} of the 200 needed</Text>
        <Text style={Styles.achievementtext}>Tripsaver</Text>
        <Text style={Styles.achievementinfo}> You have successfully save 100 trips!</Text>
        </View>
        )
      }
      else if (this.state.tripTotal>=100 && this.state.tripTotal<200&& this.state.tripsSaved>=100){
        return(
        <View style={Styles.welcome}>
        <Text style={Styles.achievementtext}>beginner Tripper</Text>
        <Text style={Styles.achievementinfo}> you have successfully completed 50 Trips!</Text>
        <Text style={Styles.achievementtext}>intermediate Tripper</Text>
        <Text style={Styles.achievementinfo}>you have successfully completed 100 Trips!</Text>
        <Text style={Styles.achievementtext}>Advanced Tripper</Text>
        <Text style={Styles.achievementinfo}> you have completed {this.state.tripTotal} of the 200 needed</Text>
        <Text style={Styles.achievementtext}>Tripsaver</Text>
        <Text style={Styles.achievementinfo}> You have successfully save 100 trips!</Text>
        </View>
        )
      }
      else if (this.state.tripTotal<200 && this.state.tripsSaved>=100){
        return(
        <View style={Styles.welcome}>
        <Text style={Styles.achievementtext}>beginner Tripper</Text>
        <Text style={Styles.achievementinfo}> you have successfully completed 50 Trips!</Text>
        <Text style={Styles.achievementtext}>intermediate Tripper</Text>
        <Text style={Styles.achievementinfo}>you have successfully completed 100 Trips!</Text>
        <Text style={Styles.achievementtext}>Advanced Tripper</Text>
        <Text style={Styles.achievementinfo}>you have successfully completed 200 Trips!</Text>
        <Text style={Styles.achievementtext}>Tripsaver</Text>
        <Text style={Styles.achievementinfo}> You have successfully save 100 trips!</Text>
        </View>
        )
      }
    };
  
}*/
setstatevalues(){
  console.log("this is the setstatevalus");
  var tripsSaved=0;
  this.setState({tripTotal:(this.state.Data).length});
  console.log(this.state.tripTotal)
  for(let i = 0; i <this.state.tripTotal; i++) 
  {
    tripsSaved=+this.state.Data[i].TripsSaved;
    console.log(this.state.Data[i].TripsSaved);
  };
  this.setState({TripSaveTotal:tripsSaved});
  console.log(this.state.TripSaveTotal);
  console.log(this.state.tripTotal);

}
render(){
  if(this.state.tripTotal<50 ){
return(
  <View style={Styles.welcome}>
<Text style={Styles.achievementtext}>beginner Tripper</Text>
<Text style={Styles.achievementinfo}> you have completed {this.state.tripTotal} of the 50 needed</Text>
<Text style={Styles.achievementtext}>intermediate Tripper</Text>
<Text style={Styles.achievementinfo}> you have completed {this.state.tripTotal} of the 100 needed</Text>
<Text style={Styles.achievementtext}>Advanced Tripper</Text>
<Text style={Styles.achievementinfo}> you have completed {this.state.tripTotal} of the 200 needed</Text>

</View>
)
  }
   else if (this.state.tripTotal>=50 && this.state.tripTotal<100){
    return(
    <View style={Styles.welcome}>
    <Text style={Styles.achievementtext}>beginner Tripper</Text>
    <Text style={Styles.achievementinfo}> you have successfully completed 50 Trips!</Text>
    <Text style={Styles.achievementtext}>intermediate Tripper</Text>
    <Text style={Styles.achievementinfo}> you have completed {this.state.tripTotal} of the 100 needed</Text>
    <Text style={Styles.achievementtext}>Advanced Tripper</Text>
    <Text style={Styles.achievementinfo}> you have completed {this.state.tripTotal} of the 200 needed</Text>

    </View>
    )
  }
   else if (this.state.tripTotal>=100 && this.state.tripTotal<200){
    return(
    <View style={Styles.welcome}>
    <Text style={Styles.achievementtext}>beginner Tripper</Text>
    <Text style={Styles.achievementinfo}> you have successfully completed 50 Trips!</Text>
    <Text style={Styles.achievementtext}>intermediate Tripper</Text>
    <Text style={Styles.achievementinfo}>you have successfully completed 100 Trips!</Text>
    <Text style={Styles.achievementtext}>Advanced Tripper</Text>
    <Text style={Styles.achievementinfo}> you have completed {this.state.tripTotal} of the 200 needed</Text>
    </View>
    )
  }
   else if (this.state.tripTotal>=200 ){
    return(
    <View style={Styles.welcome}>
    <Text style={Styles.achievementtext}>beginner Tripper</Text>
    <Text style={Styles.achievementinfo}> you have successfully completed 50 Trips!</Text>
    <Text style={Styles.achievementtext}>intermediate Tripper</Text>
    <Text style={Styles.achievementinfo}>you have successfully completed 100 Trips!</Text>
    <Text style={Styles.achievementtext}>Advanced Tripper</Text>
    <Text style={Styles.achievementinfo}>you have successfully completed 200 Trips!</Text>
    </View>
    )
  }
  else{
    return(
      null
    )
  }
};

}
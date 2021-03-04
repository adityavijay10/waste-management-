import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import {createSwitchNavigator, createAppContainer} from 'react-navigation';
import WelcomeScreen from "./screens/WelcomeScreen";
import UserRequestScreen from './screens/UserRequestScreen'
import TrackingRequest from './screens/TrackingRequest'
import CollectorLogin from './screens/CollectorLogin';
export default class App extends React.Component{
  render(){
   return(
<View>
  <AppContainer/>
</View>
   ) 
  }
}
var AppNavigator = createSwitchNavigator({
  WelcomeScreen: WelcomeScreen,
  UserRequestScreen: UserRequestScreen,
  TrackingRequest: TrackingRequest,
  CollectorLogin:CollectorLogin,
})

const AppContainer = createAppContainer(AppNavigator)
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

import * as React from 'react';
import { Text, View, StyleSheet } from 'react-native';
import HomeScreen from './screens/HomeScreen';
import HoroscopeScreen from './screens/HoroscopeScreen';
import JokeScreen from './screens/JokeScreen';
import NewsScreen from './screens/NewsScreen';
import WeatherScreen from './screens/WeatherScreen';
import { createAppContainer,createSwitchNavigator} from 'react-navigation';

export default class App extends React.Component {
  render(){
  return (
   <AppContainer/>
  );
}}

var AppNavigator=createSwitchNavigator({
  HomeScreen:HomeScreen,
  HoroscopeScreen:HoroscopeScreen,
  JokeScreen:JokeScreen,
  NewsScreen:NewsScreen,
  WeatherScreen:WeatherScreen
})

const AppContainer=createAppContainer(AppNavigator)

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    paddingTop: Constants.statusBarHeight,
    backgroundColor: '#ecf0f1',
    padding: 8,
  },
  paragraph: {
    margin: 24,
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
  },
});

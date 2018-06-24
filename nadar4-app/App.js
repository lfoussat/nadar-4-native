import React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native'
import HomeScreen from './components/HomeScreen.js'
import { createStackNavigator, createBottomTabNavigator } from 'react-navigation'
import GalleryScreen from './components/GalleryScreen.js'
import AnimationScreen from './components/AnimationScreen.js'
import { Font } from 'expo'
import './assets/fonts/KlinicSlabMedium.otf'

const HomeStack = createStackNavigator({
  Home: {
    screen: HomeScreen,
    navigationOptions: {
      header: null
    }
  },
  Animation: {
    screen: AnimationScreen,
    navigationOptions: {
      header: null,
      tabBarVisible: false
    }
  }
})

const RouteTab = createBottomTabNavigator({
  Home: HomeStack,
  Gallery: GalleryScreen,
}, {
  tabBarOptions: {
    style: {
      backgroundColor: '#1F1F1F',
    },
    labelStyle: {
      fontFamily: 'KlinicSlabMedium',
      fontSize: 22
    },
    activeTintColor: 'white',
    inactiveTintColor: 'grey'
  }
})

export default class App extends React.Component {
  state = {
    loading: true,
  }

  async componentDidMount() {
    await Font.loadAsync({
      'KlinicSlabMedium': require('./assets/fonts/KlinicSlabMedium.otf'),
      'KlinicSlabLight': require('./assets/fonts/KlinicSlabLight.otf'),
      'DroidSans': require('./assets/fonts/DroidSans.ttf'),
    })
    this.setState({ loading: false })
  }

  render() {
    return this.state.loading
      ? <Text>loading...</Text>
      : <RouteTab />
  }
}

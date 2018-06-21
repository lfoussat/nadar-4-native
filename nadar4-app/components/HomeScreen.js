import React from 'react'
import { StyleSheet, Text, View, Button, Image, ImageBackground, TouchableHighlight } from 'react-native'
import { Font } from 'expo'
import '../assets/fonts/KlinicSlabMedium.otf'

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'space-between'
  },
  scan: {
    fontFamily: 'KlinicSlabMedium',
    fontSize: 25,
    color:'#ffffff',
    textAlign: 'center',
    marginTop: 35
  },
  backgroundImage: {
    flex: 1
  },
  image: {
    marginTop: 35,
    marginLeft: -8,
    width: 150,
    height: 150,
  },
  gifLine: {
    flexWrap: 'wrap',
    alignItems: 'flex-start',
    flexDirection:'row',
  },
  gif: {
    width: 100,
    height: 100
  }
})


class HomeScreen extends React.Component {
  state = {
    loading: true,
  }

  async componentDidMount() {
    await Font.loadAsync({
      'KlinicSlabMedium': require('../assets/fonts/KlinicSlabMedium.otf'),
      'KlinicSlabLight': require('../assets/fonts/KlinicSlabLight.otf'),
      'DroidSans': require('../assets/fonts/DroidSans.ttf'),
    })
    this.setState({ loading: false })
  }

  render() {
    return this.state.loading
      ? <Text>loading...</Text>
      : (
      <ImageBackground source={require('../assets/img/fond.png')} style={styles.backgroundImage} >
        <View style={styles.container}>
          <View>
            <Text style={styles.scan}>SCAN YOUR QR CODE</Text>
          </View>
          <View style={{ flex: 1 }}>
            <TouchableHighlight onPress={() => {this.props.navigation.navigate('Animation')
            setTimeout(() => this.props.navigation.navigate('Gallery', { modalVisible: 2 }), 39000)}}> 
              <Image source={require('../assets/img/qr.png')} style={styles.image} />
            </TouchableHighlight>
          </View>
          <View style={styles.gifLine}>
            <Image source={require('../assets/img/nad-gif.gif')} style={styles.gif} />
            <Image source={require('../assets/img/paul-gif.gif')} style={styles.gif} />
            <Image source={require('../assets/img/adri-gif.gif')} style={styles.gif} />
          </View>
        </View>
      </ImageBackground>
    )
  }
}

export default HomeScreen

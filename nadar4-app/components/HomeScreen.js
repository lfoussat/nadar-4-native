import React from 'react'
import { StyleSheet, Text, View, Button, ImageBackground } from 'react-native'
import { Font } from 'expo'
import '../assets/fonts/KlinicSlabMedium.otf'


const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  backgroundImage: {
    flex: 1,
  }
})


class HomeScreen extends React.Component {
  state = {
    loading: true,
  }

  async componentDidMount() {
    await Font.loadAsync({
      'KlinicSlabMedium': require('../assets/fonts/KlinicSlabMedium.otf'),
    })
    this.setState({ loading: false })
  }

  render() {
    return this.state.loading
      ? <Text>loading...</Text>
      : (
      <ImageBackground source={require('../assets/img/fond.png')} style={styles.backgroundImage} >
        <View style={styles.container}>
          <Text style={{fontFamily: 'KlinicSlabMedium'}}>SCAN YOUR QR CODE</Text>
          <Button title="Gallery" onPress={() => this.props.navigation.navigate('Gallery')} />
        </View>
      </ImageBackground>
    )
  }
}

export default HomeScreen

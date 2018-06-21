import React from 'react'
import { StyleSheet, Text, View, Button, Image, ImageBackground, Dimensions } from 'react-native'
import { Video } from 'expo'

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'black'
  }
})


class AnimationScreen extends React.Component {

  render() {
    const { width } = Dimensions.get('window')

    return (
      <View style={styles.container}>
      	<Video
      	  source={require('../assets/anim/anim.mp4')}
                shouldPlay
      	  resizeMode="cover"
      	  style={{ width, height: 650, marginTop: -150 }}
      	/>
      </View>



    )
  }
}

export default AnimationScreen

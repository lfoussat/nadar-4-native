import React from 'react'
import { StyleSheet, Text, View, Button } from 'react-native'

class GalleryScreen extends React.Component {
  render() {
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Button title="Home" onPress={() => this.props.navigation.navigate('Home')} />
        <Text>Gallery</Text>
      </View>
    );
  }
}

export default GalleryScreen

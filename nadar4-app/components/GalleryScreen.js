import React from 'react'
import { StyleSheet, Text, View, Button, ImageBackground, Image, AppRegistry, ScrollView } from 'react-native'
import GalleryContent from './GalleryContent.js'

const data  = [
  {
    id: 1,
    title: 'CONCOURS AGRICOLE UNIVERSEL',
    image: require('../assets/img/gallery/Bovin.png'),
    date: '1956'
  },
  {
    id: 2,
    title: 'PORTRAIT DE SARAH BERNHARTD',
    image: require('../assets/img/gallery/Bernhartd.png'),
    date: '1864'
  },
  {
    id: 3,
    title: 'MAQUETTE DE L\'HÉLICOPTÈRE',
    image: require('../assets/img/gallery/Helicoptere.png'),
    date: '1863'
  },
  {
    id: 4,
    title: 'PORTRAIT DE BEAUDELAIRE',
    image: require('../assets/img/gallery/Baudelaire.png'),
    date: ''
  }
]

const styles = StyleSheet.create({
  backgroundImage: {
    flex: 1,
  },
  title: {
    fontFamily: 'KlinicSlabMedium',
    fontSize: 34,
    marginTop: 50,
    marginBottom: 30,
    color:'#F0F8EA'
  }
})

const handlePosition = (id) => {
  if (id % 2 === 0) {
    
  }
}

class GalleryScreen extends React.Component {
  render() {
    return (
      <ScrollView style={{backgroundColor: '#1F1F1F'}}>
        <ImageBackground source={require('../assets/img/gallery/background.jpg')} style={styles.backgroundImage} >
          <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
            <Text style={styles.title}>GALLERY</Text>
          </View>
          {data.map(content => <GalleryContent key={content.id} content={content} />)}
        </ImageBackground>
      </ScrollView>
    )
  }
}

export default GalleryScreen

import React from 'react'
import { StyleSheet, Text, View, Button, ImageBackground, Image, AppRegistry, ScrollView, Modal, TouchableHighlight } from 'react-native'
import GalleryContent from './GalleryContent.js'

const styles = StyleSheet.create({
  backgroundImage: {
    flex: 1,
  },
  title: {
    fontFamily: 'KlinicSlabMedium',
    fontSize: 34,
    marginTop: 50,
    marginBottom: 30,
    color:'#d6d6d6'
  }
})

class GalleryScreen extends React.Component {
  state = {
    modalVisible: false,
    data: [
      {
        id: 1,
        title: 'CONCOURS AGRICOLE UNIVERSEL',
        image: require('../assets/img/gallery/Bovin.png'),
        date: '1860',
        author: 'Félix Nadar',
        description: 'Oui, cette photo a bien permis une avancée scientifique grâce à la photo de bovins et ovins',
        alignItems: 'flex-start',
        flexDirection: 'row',
        lock: false
      },
      {
        id: 2,
        title: 'PORTRAIT DE SARAH BERNHARTD',
        image: require('../assets/img/gallery/Bernhartd-locked.png'),
        date: '1864',
        author: 'Félix Nadar',
        description: 'Avant d\’être connue, elle savait que se faire photographier lui permettrait d\’atteindre une certaine notoriété',
        alignItems: 'flex-end',
        flexDirection: 'row-reverse',
        lock: true
      },
      {
        id: 3,
        title: 'MAQUETTE DE L\'HÉLICOPTÈRE',
        image: require('../assets/img/gallery/Helicoptere.png'),
        date: '1863',
        author: 'Paul Nadar',
        description: 'Oui, cette photo est bien une photo que Christopher ne comprends pas... Point.',
        alignItems: 'flex-start',
        flexDirection: 'row',
        lock: false
      },
      {
        id: 4,
        title: 'PORTRAIT DE BAUDELAIRE',
        image: require('../assets/img/gallery/Baudelaire.png'),
        date: '',
        author: 'Adrien Nadar',
        description: 'Oui, cette photo est bien une photo que Christopher ne comprends pas... Point.',
        alignItems: 'center',
        flexDirection: 'column',
        lock: false
      }
    ]
  }

  setModalVisible = id => {
    this.setState({ modalVisible: id })
  }

  componentDidUpdate(prevProps) {
    const navParam = this.props.navigation.getParam('modalVisible', false)
    if (navParam !== this.state.navParam) {
      const match = this.state.data.find(({ id }) => id === navParam)
      match && (match.lock = false)
      match && (match.image = require('../assets/img/gallery/Bernhartd.png'))
      this.setState({ navParam, modalVisible: navParam })
    }
  }

  render() {
    return (
      <ScrollView style={{backgroundColor: '#1F1F1F'}}>
        <ImageBackground source={require('../assets/img/gallery/background.jpg')} style={styles.backgroundImage} >
          <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
            <Text style={styles.title}>GALLERY</Text>
          </View>
          <View style={{margin: 10}}>
            {this.state.data.map(content =>
              <GalleryContent
                visible={this.state.modalVisible === content.id}
                key={content.id}
                content={content}
                setModalVisible={this.setModalVisible} />)}
          </View>
        </ImageBackground>
      </ScrollView>
    )
  }
}

export default GalleryScreen

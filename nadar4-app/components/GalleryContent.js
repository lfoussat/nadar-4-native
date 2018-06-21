import React from 'react'
import { StyleSheet, Text, View, Button, Image, Modal, TouchableHighlight } from 'react-native'

const styles = StyleSheet.create({
  text: {
    fontFamily: 'KlinicSlabMedium',
    color:'#d6d6d6',
    fontSize: 20
  },
  date: {
    fontFamily: 'KlinicSlabMedium',
    color:'#d6d6d6',
    fontSize: 30,
    margin:10
  },
  caption: {
    fontFamily: 'KlinicSlabMedium',
    color:'#d6d6d6',
    fontSize: 16,
    margin:10
  }
})

const GalleryContent = ({ content, style, setModalVisible, visible }) =>
  <View style={{ marginBottom: 50 }}>
    <View style={{ flex: 1, alignItems: `${content.alignItems}`, width: 300, marginBottom: 15 }}>
      <Text style={styles.text}>{content.title}</Text>
    </View>
    <View style={{ flex: 1, flexDirection: `${content.flexDirection}`, alignItems: 'center' }}>
      <Modal
        animationType="slide"
        style= {{backgroundColor: '#1F1F1F'}}
        transparent={false}
        visible={visible}
        presentationStyle= 'fullScreen'
        onRequestClose={() => {
          alert('Modal has been closed.');
        }}>
        <View style={{flex:1, backgroundColor: '#1F1F1F', padding: 15 }}>
          <View>
            <TouchableHighlight onPress={() => setModalVisible(false)}>
              <Text style={{fontSize: 48, color: '#d6d6d6', fontFamily: 'KlinicSlabLight', marginTop:10, textAlign: 'right' }}>X</Text>
            </TouchableHighlight>
            <View style={{ flexDirection:'column', justifyContent: 'center', alignItems: 'center', marginBottom: 15}}>
            <Text style={styles.text}>{content.title}</Text>
            <Image source={content.image} style={{marginTop: 30, flexDirection: 'column'}}/>
            </View>
            <Text style={styles.caption}>{content.author} - {content.date}</Text>
            <Text style={{fontFamily: 'KlinicSlabLight', color:'#d6d6d6', fontSize:18}}>{content.description}</Text>
          </View>
        </View>
      </Modal>
      <TouchableHighlight onPress={() => setModalVisible(content.id)}>
        <Image source={content.image} />
      </TouchableHighlight>
      <Text style={styles.date}>{content.date}</Text>
    </View>
  </View>


export default GalleryContent

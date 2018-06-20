import React from 'react'
import { StyleSheet, Text, View, Button, Image } from 'react-native'

const styles = StyleSheet.create({
  text: {
    fontFamily: 'KlinicSlabMedium',
    color:'#F0F8EA',
    fontSize: 20
  },
  date: {
    fontFamily: 'KlinicSlabMedium',
    color:'#F0F8EA',
    fontSize: 30
  }
})

const GalleryContent = ({ content, style }) =>
  <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center', marginBottom: 20 }}>
    <Text style={styles.text}>{content.title}</Text>
    <Image source={content.image} />
    <Text style={styles.date}>{content.date}</Text>
  </View>


export default GalleryContent

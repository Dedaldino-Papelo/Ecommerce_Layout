import { View, Text, Image } from 'react-native'
import React from 'react'
import styles from './style'
import { AntDesign } from '@expo/vector-icons'; 

const MoreItems = ({ item, image }) => {
const { src } = item
  return (
      <View style={src != image ? styles.MoreItems : ''}>
          {
            src != image ? <Image style={styles.image} source={src} /> : ''
          }
      </View>
  )
}

export default MoreItems
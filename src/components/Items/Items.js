import { View, Text, Image } from 'react-native'
import React from 'react'
import styles from './styles'

export default function Items({ item }) {
  const { src, title, bgBlue } = item
  return (
   <View style={styles.container}>
        <View style={[styles.wrapImage, {backgroundColor: bgBlue ? '#7237A9': ''}]}>
            <Image
              source={src}
              style={styles.image} 
              />
        </View>
        <Text>{title}</Text>
   </View>
  )
}
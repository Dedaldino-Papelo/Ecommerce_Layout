import { View, Text, Image } from 'react-native'
import React from 'react'
import styles from './style'

export default function Header() {
  return (
    <View style={styles.header}>
      <View style={styles.menu}>
      <Image 
        source={require('../../assets/Vector.png')} />
      </View>
      <View style={styles.image}>
        <Image
            style={styles.avatar}
            source={require('../../assets/avatar.jpg')} />
      </View>
    </View>
  )
}
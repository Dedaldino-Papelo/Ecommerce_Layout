import { View, Text, Image } from 'react-native'
import React from 'react'
import styles from './style'
import { AntDesign } from '@expo/vector-icons'; 

const MoreItems = ({ item, image }) => {
const { src } = item
  return (
      <View style={styles.container}>
        {
          src != image ? (
            <View style={styles.MoreItems}>
              <Image style={styles.image} source={src} />
              <AntDesign style={styles.addMoreIcon} name="pluscircle" size={25} color="#7237A9" />
            </View>
          ): ''
        }
      </View>

  )
}

export default MoreItems
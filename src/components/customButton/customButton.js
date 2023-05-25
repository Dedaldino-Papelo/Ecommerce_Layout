import { View, Text, TouchableOpacity } from 'react-native'
import React from 'react'
import { Foundation } from '@expo/vector-icons';
import styles from './style';

const customButton = () => {
  return (
    <TouchableOpacity style={styles.button}>
      <Foundation name="star" size={20} color="#FFC107" />
      <Text style={styles.textButton}>4.5</Text>
    </TouchableOpacity>
  )
}

export default customButton
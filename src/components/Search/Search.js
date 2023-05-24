import { View, Text, TextInput } from 'react-native'
import React from 'react'
import styles from './style'
import { Feather } from '@expo/vector-icons'; 

export default function Search() {
  return (
    <View style={styles.searchSection}>
        <Feather
            name='search' 
            style={styles.searchIcon} 
                size={24} color="#7C7C7C"/>
        <TextInput
            style={styles.input}
            placeholder="Search"
        />
</View>
  )
}
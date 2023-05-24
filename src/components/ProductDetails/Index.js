import { View, Text, StyleSheet } from 'react-native'
import React from 'react'
import styles from './style'

function Index() {
  return (
    <View style={styles.container}>
      <View style={styles.boxImage}>
        <Text>Header</Text> 
      </View>
      <View style={styles.boxdetails}>
        <View style={{...StyleSheet.absoluteFillObject, backgroundColor: "#791ba8"}} />
        <View style={{ flex: 1, backgroundColor: "#fff", borderTopRightRadius: 75 }}>
        </View>
        </View>
    </View>
  )
}

export default Index
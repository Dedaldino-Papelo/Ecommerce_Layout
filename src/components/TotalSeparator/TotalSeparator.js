import { View, Text } from 'react-native'
import React from 'react'
import styles from './style'

const TotalSeparator = ({ title }) => {
  return (
    <View style={styles.TotalSeparator}>
      <Text style={styles.prodTitle}>{title}</Text>
      <View style={styles.total}>
        <Text style={styles.textTotal}>Total:</Text>
        <Text style={styles.TotalPrice}>$20</Text>
      </View>
    </View>
  )
}

export default TotalSeparator
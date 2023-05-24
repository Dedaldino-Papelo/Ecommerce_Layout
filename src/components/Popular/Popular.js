import { View, Text, FlatList, ScrollView } from 'react-native'
import React from 'react'
import styles from './style'
import Separator from '../Separator/Separator'
import PopularData from '../../popular'
import PopularItems from '../PopularItems/PopularItems'

export default function Popular() {
  return (
    <ScrollView style={styles.container} showsVerticalScrollIndicator={false}>
      <Separator />
      <View style={styles.Popular}>
        {
        PopularData.map(item => (
          <PopularItems key={item.id} item={item} />
        ))
        }
      </View>
    </ScrollView>
    
  )
}
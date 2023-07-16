import { View } from 'react-native'
import { StatusBar } from 'expo-status-bar'
import React from 'react'
import styles from './style'
import Header from '../../components/Header/Header'
import Search from '../../components/Search/Search'
import ItemsSelect from '../../components/ItemsSelect/ItemsSelect'
import Popular from '../../components/Popular/Popular'

export default function Home() {
  return (
    <View style={styles.home}>
      <StatusBar />
      <Header/>
      <Search/>
      <ItemsSelect />
      <Popular />
    </View>
  )
}
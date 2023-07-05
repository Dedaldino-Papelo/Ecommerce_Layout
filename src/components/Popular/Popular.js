import { View, ScrollView } from 'react-native'
import React, {useEffect, useState, useContext} from 'react'
import styles from './style'
import Separator from '../Separator/Separator'
import PopularItems from '../PopularItems/PopularItems'
import { api } from '../../services/api'
import { ProductContext } from '../../contexts/product'

export default function Popular() {
  const { products, setProducts } = useContext(ProductContext)

  useEffect(() => {
    api.get('/products')
    .then(resp => setProducts(resp.data))
    .catch(error => console.log(error))
  },[])


  return (
    <ScrollView style={styles.container} showsVerticalScrollIndicator={false}>
      <Separator />
      <View style={styles.Popular}>
        {
        products.map(item => (
          <PopularItems key={item.id} item={item} />
        ))
        }
      </View>
    </ScrollView>
    
  )
}
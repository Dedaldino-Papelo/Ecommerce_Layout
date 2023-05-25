import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native'
import React from 'react'
import styles from './style'
import { AntDesign } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
import CustomButton from '../../components/customButton/customButton';
import TotalSeparator from '../../components/TotalSeparator/TotalSeparator'

function Index({ route }) {

  const { image, price, description, title } = route.params
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      <View style={styles.boxImage}>
        <TouchableOpacity style={styles.backButton} onPress={navigation.goBack}>
        <AntDesign 
          style={styles.goBack} 
            name="left" size={20} 
              color="#7237A9" 
              />
        </TouchableOpacity>
        <Image style={styles.image} source={image} />
      </View>
      <View style={styles.boxdetails}>
        <View style={{...StyleSheet.absoluteFillObject, backgroundColor: "#791ba8"}} />
        <View style={{ flex: 1, backgroundColor: "#fff", borderTopRightRadius: 75 }}>
          <View style={styles.addDecrease}>
            <AntDesign name="minus" size={20} color="black" />
            <Text style={styles.number}>2</Text>
            <AntDesign name="plus" size={20} color="black" />
          </View>
          <View style={styles.starPrice}>
            <CustomButton />
            <Text style={styles.price}>${price}</Text>
          </View>
          <TotalSeparator title={title} />
          <Text style={styles.description}>{description}</Text>
        </View>
        </View>
    </View>
  )
}

export default Index
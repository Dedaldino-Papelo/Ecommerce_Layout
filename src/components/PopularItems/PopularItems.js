import { View, Text, Image } from "react-native";
import React from "react";
import styles from "./style";
import { AntDesign } from '@expo/vector-icons'; 
import { useNavigation } from '@react-navigation/native';

const PopularItems = ({ item }) => {

  const { title, src, price, desc } = item;
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      <View style={styles.items}>
        <Image source={src} />
        <Text style={styles.title} onPress={() => navigation.navigate('Details', {
          title: title,
          image: src,
          price: price,
          description: desc
        })}>{title}</Text>
        <View style={styles.footer}>
          <Text style={styles.price}>${price}</Text>
          <AntDesign name="pluscircle" size={24} color="#7237A9" />
        </View>
      </View>
    </View>
  );
};

export default PopularItems;

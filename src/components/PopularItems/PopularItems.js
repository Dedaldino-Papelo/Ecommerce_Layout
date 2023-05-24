import { View, Text, Image } from "react-native";
import React from "react";
import styles from "./style";
import { AntDesign } from '@expo/vector-icons'; 

const PopularItems = ({ item }) => {
  const { title, src, price } = item;
  return (
    <View style={styles.container}>
      <View style={styles.items}>
        <Image source={src} />
        <Text style={styles.title}>{title}</Text>
        <View style={styles.footer}>
          <Text style={styles.price}>${price}</Text>
          <AntDesign name="pluscircle" size={24} color="#7237A9" />
        </View>
      </View>
    </View>
  );
};

export default PopularItems;

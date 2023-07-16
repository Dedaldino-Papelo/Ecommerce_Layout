import { View, Text, Image } from "react-native";
import React, {useContext} from "react";
import styles from "./style";
import { AntDesign } from '@expo/vector-icons'; 
import { useNavigation } from '@react-navigation/native';
import { CartContext } from '../../contexts/cart'

const PopularItems = ({ item }) => {

  const {addProductToCart} = useContext(CartContext)

  const { name, image, price, description } = item;
  const navigation = useNavigation();

  const baseURL = 'http://192.168.56.1:3333/uploads'

  return (
    <View style={styles.container}>
      <View style={styles.items}>
        <Image 
        style={{
          width: 100,
          height: 100,
          resizeMode: "contain"
      }} source={{
          uri: `${baseURL}/${image}`
        }} />
        <Text style={styles.name} onPress={() => navigation.navigate('Details', {
          name: name,
          image: image,
          price: price,
          description: description
        })}>{name}</Text>
        <View style={styles.footer}>
          <Text style={styles.price}>${price}</Text>
          <AntDesign 
            name="pluscircle" 
            size={24} color="#7237A9"
            onPress={() => addProductToCart(item)} 
            />
        </View>
      </View>
    </View>
  );
};

export default PopularItems;

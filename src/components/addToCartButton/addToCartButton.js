import { View, Text, TouchableOpacity } from "react-native";
import React from "react";
import { AntDesign } from "@expo/vector-icons";
import styles from "./style";

const AddToCartButton = () => {
  return (
      <TouchableOpacity style={styles.container}>
        <Text style={styles.textButton}>Add To Cart</Text>
        <View style={styles.iconWrapper}>
          <AntDesign
            style={styles.icon}
            name="right"
            size={20}
            color="#7237A9"
          />
        </View>
      </TouchableOpacity>
  );
};

export default AddToCartButton;

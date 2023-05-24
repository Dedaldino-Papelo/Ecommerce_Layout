import { View, ScrollView, Image, Text, FlatList, SafeAreaView } from "react-native";
import React from "react";
import Data from "../../Data";
import Items from "../Items/Items";
import styles from './style'

export default function ItemsSelect() {
  return (
    <SafeAreaView>
      <FlatList
        style={styles.container}
        horizontal
        showsHorizontalScrollIndicator={false}
        data={Data}
        keyExtractor={(item) => item.id}
        renderItem={({item}) => (
          <Items item={item} />
        )}
      />
    </SafeAreaView>
  );
}

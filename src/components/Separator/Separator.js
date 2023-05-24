import { Text, View } from "react-native";
import React from "react";
import styles from "./style";

const Separator = () => {
  return (
    <View style={styles.Separator}>
      <Text style={styles.leftText}>Popular</Text>
      <View style={styles.rightside}>
        <Text style={styles.rightText}>View All</Text>
      </View>
    </View>
  );
};

export default Separator;

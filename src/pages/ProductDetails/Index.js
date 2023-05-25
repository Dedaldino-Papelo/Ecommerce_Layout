import {
  View,
  Text,
  StyleSheet,
  Image,
  FlatList,
  TouchableOpacity,
  ScrollView
} from "react-native";
import React from "react";
import styles from "./style";
import { AntDesign } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import CustomButton from "../../components/customButton/customButton";
import TotalSeparator from "../../components/TotalSeparator/TotalSeparator";
import PopularData from "../../popular";
import MoreItems from "../../components/MoreItems/MoreItems";
import AddToCartButton from "../../components/addToCartButton/addToCartButton";

function Index({ route }) {
  const { image, price, description, title } = route.params;
  const navigation = useNavigation();

  return (
    <ScrollView showsVerticalScrollIndicator={false} style={styles.container}>
      <View style={styles.boxImage}>
        <TouchableOpacity style={styles.backButton} onPress={navigation.goBack}>
          <AntDesign
            style={styles.goBack}
            name="left"
            size={20}
            color="#7237A9"
          />
        </TouchableOpacity>
        <Image style={styles.image} source={image} />
      </View>
      <View style={styles.boxdetails}>
        <View
          style={{
            ...StyleSheet.absoluteFillObject,
            backgroundColor: "#791ba8",
          }}
        />
        <View
          style={{ flex: 1, backgroundColor: "#fff", borderTopRightRadius: 75 }}
        >
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
          <Text style={styles.textAddMore}> Add More </Text>
          <View style={styles.wrapAddMoreItems}>
          <FlatList
              data={PopularData}
              style={styles.moreItemsList}
              horizontal
              contentContainerStyle={{flexGrow: 1, justifyContent: "space-between"}}
              showsHorizontalScrollIndicator={false}
              keyExtractor={(item) => item.id}
              renderItem={({ item }) => (
                <MoreItems key={item.id} image={image} item={item} />
              )}
          />
          </View>
          <AddToCartButton />
          
        </View>
      </View>
    </ScrollView>
  );
}

export default Index;

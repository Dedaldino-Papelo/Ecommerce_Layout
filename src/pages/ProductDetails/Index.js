import {
  View,
  Text,
  StyleSheet,
  Image,
  FlatList,
  TouchableOpacity,
  ScrollView
} from "react-native";
import React, { useContext } from "react";
import styles from "./style";
import { AntDesign } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import CustomButton from "../../components/customButton/customButton";
import TotalSeparator from "../../components/TotalSeparator/TotalSeparator";
import MoreItems from "../../components/MoreItems/MoreItems";
import AddToCartButton from "../../components/addToCartButton/addToCartButton";
import { ProductContext } from '../../contexts/product'

function Index({ route }) {
  const { products } = useContext(ProductContext)
  const { image, price, description, name } = route.params;
  const navigation = useNavigation();

  const baseURL = 'http://192.168.56.1:3333/uploads'

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
        <Image 
          style={styles.image} 
          source={{
            uri: `${baseURL}/${image}`
          }} 
          />
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
          <TotalSeparator name={name} />
          <Text style={styles.description}>{description}</Text>
          <Text style={styles.textAddMore}> Add More </Text>
          <FlatList
              data={products}
              style={styles.moreItemsList}
              horizontal
              contentContainerStyle={{flexGrow: 1, justifyContent: "space-between"}} 
              showsHorizontalScrollIndicator={false}
              keyExtractor={(item) => item.id}
              renderItem={({ item }) => (
                <MoreItems key={item.id} image={image} item={item} />
              )}
          />
          <AddToCartButton />
          
        </View>
      </View>
    </ScrollView>
  );
}

export default Index;

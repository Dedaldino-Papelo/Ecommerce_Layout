import { View, Text } from "react-native";
import React, {useContext} from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Feather } from "@expo/vector-icons";
import { SimpleLineIcons } from '@expo/vector-icons'; 
import stackRoute from "./stack.route";
import Cart from "../pages/Cart/cart";
import Profile from "../pages/Profile/profile";
import { CartContext } from '../contexts/cart'

const Tab = createBottomTabNavigator();

const TabRoute = () => {

  const { cart } = useContext(CartContext)
  const itemCount = cart.reduce((acc, item) => {
      return acc + item.quantity
  }, 0)

  return (
    <Tab.Navigator 
      screenOptions={{
        headerShown: '',
        tabBarShowLabel: false, 
        tabBarStyle: {backgroundColor: '#7237A9'},
        tabBarInactiveTintColor: '#fff',
        tabBarActiveTintColor: '#ccc'
        }}>
      <Tab.Screen
        name="Inicio"
        component={stackRoute}
        options={{
          tabBarIcon: ({ size, color }) => (
              <Feather name="home" color={color} size={size} />
          )
        }}
      />

      <Tab.Screen
        name="Cart"
        component={Cart}
        options={{
          tabBarBadge: itemCount,
          tabBarBadgeStyle: {backgroundColor: 'red'},
          tabBarIcon: ({ size, color }) => (
            <SimpleLineIcons name='bag' size={size} color={color} />
          )
        }}
      />

      <Tab.Screen
        name="Profile"
        component={Profile}
        options={{
          tabBarIcon: ({ size, color }) => (
            <Feather name="user" color={color} size={size} />
          )
        }}
      />
    </Tab.Navigator>
  );
};

export default TabRoute;

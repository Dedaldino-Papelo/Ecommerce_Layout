import { View, Text } from "react-native";
import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Feather } from "@expo/vector-icons";
import { SimpleLineIcons } from '@expo/vector-icons'; 
import stackRoute from "./stack.route";
import Cart from "../pages/Cart/cart";
import Profile from "../pages/Profile/profile";

const Tab = createBottomTabNavigator();

const TabRoute = () => {
  return (
    <Tab.Navigator 
      screenOptions={{
        headerShown: '', 
        tabBarStyle: {
          backgroundColor: '#7237A9'
        }
        }}>
      <Tab.Screen
        name="Inicio"
        component={stackRoute}
        options={{
          tabBarIconStyle: { marginTop: 10},
          tabBarIcon: ({ size }) => (
            <Feather name="home" color='#fff' size={size} />
          ),
          tabBarLabel: "",
        }}
      />

      <Tab.Screen
        name="Cart"
        component={Cart}
        options={{
          tabBarIconStyle: { marginTop: 10},
          tabBarIcon: ({ size }) => (
            <SimpleLineIcons name="bag" size={size} color='#fff' />
          ),
          tabBarLabel: "",
        }}
      />

      <Tab.Screen
        name="Profile"
        component={Profile}
        options={{
          tabBarIconStyle: { marginTop: 10},
          tabBarIcon: ({ size }) => (
            <Feather name="user" color='#fff' size={size} />
          ),
          tabBarLabel: "",
        }}
      />
    </Tab.Navigator>
  );
};

export default TabRoute;

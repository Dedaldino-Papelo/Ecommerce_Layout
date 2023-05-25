import 'react-native-gesture-handler';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer,DefaultTheme  } from '@react-navigation/native';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View } from 'react-native';
import Home from './src/pages/Home/home';
import ProductDetails from './src/pages/ProductDetails/Index';

const Stack = createStackNavigator();

const MyTheme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    primary: 'rgb(255, 45, 85)',
    background:'#fff'
  },
};

export default function App() {
  return (
    <NavigationContainer theme={MyTheme}>
      <Stack.Navigator   
      screenOptions={{
        headerShown: false,
    }}>
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="Details" component={ProductDetails} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
});

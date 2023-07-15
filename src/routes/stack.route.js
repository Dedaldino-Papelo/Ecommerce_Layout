import { createStackNavigator } from "@react-navigation/stack";
import Home from "../pages/Home/home";
import ProductDetails from "../pages/ProductDetails/Index";

const Stack = createStackNavigator();

export default StackRoute = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}
    >
      <Stack.Screen name="Home" component={Home} />
      <Stack.Screen name="Details" component={ProductDetails} />
    </Stack.Navigator>
  );
};

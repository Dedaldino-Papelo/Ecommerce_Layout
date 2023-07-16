import { NavigationContainer, } from '@react-navigation/native';
import ProductProvider from '../contexts/product';
import { CartProvider } from '../contexts/cart';
import TabRoute from './tab.routes';


export default Routes = () => {
  return (
    <NavigationContainer>
      <CartProvider>
      <ProductProvider>
        <TabRoute />
      </ProductProvider>
      </CartProvider>
    </NavigationContainer>
  );
};

import { NavigationContainer, } from '@react-navigation/native';
import ProductProvider from '../contexts/product';
import TabRoute from './tab.routes';


export default Routes = () => {
  return (
    <NavigationContainer>
      <ProductProvider>
        <TabRoute />
      </ProductProvider>
    </NavigationContainer>
  );
};

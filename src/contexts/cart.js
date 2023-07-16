import { createContext, useState } from "react";

export const CartContext = createContext({});

export const CartProvider = ({ children }) => {
    const [state, setState] = useState({
        cart: [],
      });
  const { cart } = state
  const addProductToCart = (item) => {
    setState({
        ...state,
        cart: state.cart.find((cartItem) => cartItem.id === item.id)
          ? state.cart.map((cartItem) =>
              cartItem.id === item.id
                ? { ...cartItem, quantity: cartItem.quantity + 1 }
                : cartItem
            )
          : [...state.cart, { ...item, quantity: 1 }],
      });
  };
  console.log(cart)

  return (
    <CartContext.Provider value={{ addProductToCart, cart }}>
      {children}
    </CartContext.Provider>
  );
};

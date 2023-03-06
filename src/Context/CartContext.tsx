import { createContext } from 'react';
import { DefaultContextValueProps } from '../interfaces/DefaultContextValueProps';

const defaultContextValue: DefaultContextValueProps = {
  cartItems: [],
  setCartItems: () => { },
  update: 0,
  setUpdate: () => { }
}

const CartContext = createContext(defaultContextValue);

export default CartContext;

import { createContext } from 'react';
import { DefaultContextValueProps } from '../interfaces/DefaultContextValueProps';

const defaultContextValue: DefaultContextValueProps = {
  cartItems: [],
  update: 0,
};

const CartContext = createContext(defaultContextValue);

export default CartContext;

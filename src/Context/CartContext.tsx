import { createContext } from 'react';
import { DefaultContextValueProps } from '../interfaces/DefaultContextValueProps';

const CartContext = createContext({} as DefaultContextValueProps);

export default CartContext;

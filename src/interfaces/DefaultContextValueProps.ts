import React from 'react';
import { IProduct } from './IProduct';

export interface DefaultContextValueProps {
  cartItems: IProduct[],
  setCartItems: React.Dispatch<React.SetStateAction<IProduct[]>>,
  update: number,
  setUpdate: React.Dispatch<React.SetStateAction<number>>
}

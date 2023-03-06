import React, { useEffect, useMemo, useState } from 'react';
import { DefaultContextValueProps } from '../interfaces/DefaultContextValueProps';
import { IProduct } from '../interfaces/IProduct';
import { ProviderProps } from '../interfaces/ProviderProps';
import loadLocalStorage from '../utils/loadLocalStorage';
import CartContext from './CartContext';

function Provider({ children }: ProviderProps) {
  const [cartItems, setCartItems] = useState<IProduct[]>([]);
  const [update, setUpdate] = useState<number>(0);

  useEffect(() => {
    const loadCartItems = async (): Promise<void> => {
      const cart: IProduct[] = await loadLocalStorage();
      setCartItems(cart);
    };
    loadCartItems();
  });

  const value: DefaultContextValueProps = useMemo(() => ({
    cartItems,
    setCartItems,
    update,
    setUpdate,
  }), [cartItems, update]);

  return (
    <CartContext.Provider value={value}>
      {children}
    </CartContext.Provider>
  );
}

export default Provider;

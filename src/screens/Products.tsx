import React, { useEffect, useState } from 'react';
import { Text } from 'react-native';
import getProductsFromFirestore from '../firebase/getProductsFromFirestore';
import { IProduct } from '../interfaces/IProduct';

export default function Products() {
  const [products, setProducts] = useState<IProduct[]>([]);

  useEffect(() => {
    const getProducts = async (): Promise<void> => {
      try {
        const productsFromFirestore: IProduct[] = await getProductsFromFirestore();
        setProducts(productsFromFirestore);
      } catch (err) {
        const error = err as Error;
        console.log(error.message);
      }
    }
    getProducts();
  }, []);

  return <Text>{JSON.stringify(products)}</Text>
}

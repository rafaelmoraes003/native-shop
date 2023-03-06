import React, { useEffect, useState } from 'react';
import { Text, View } from 'react-native';
import Header from '../components/Header';
import getProductsFromFirestore from '../firebase/getProductsFromFirestore';
import { IProduct } from '../interfaces/IProduct';
import { NavigationProp } from '../interfaces/NavigationProp';

export default function Products({ navigation }: NavigationProp) {
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
    };
    getProducts();
  }, []);

  return (
    <View>
      <Header navigation={navigation} />
      <Text>{JSON.stringify(products)}</Text>
    </View>
  );
}

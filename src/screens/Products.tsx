import React, { useEffect, useState } from 'react';
import { FlatList, View } from 'react-native';
import Header from '../components/Header';
import ProductCard from '../components/ProductCard';
import getProductsFromFirestore from '../firebase/getProductsFromFirestore';
import { IProduct } from '../interfaces/IProduct';
import { NavigationProp } from '../interfaces/NavigationProp';
import styles from '../styles/products';

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
    <View style={styles.container}>
      <Header navigation={navigation} />
      <View style={styles.list}>
        <FlatList
          data={products}
          renderItem={({ item }) => (
            <ProductCard
              key={item.id}
              id={item.id}
              title={item.title}
              price={item.price}
              imgUrl={item.imgUrl}
            />
          )}
          keyExtractor={(item) => item.id}
          horizontal
        />
      </View>
    </View>
  );
}

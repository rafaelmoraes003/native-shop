import React, { useEffect, useState } from 'react';
import { FlatList, View } from 'react-native';
import Header from '../components/Header';
import ProductCard from '../components/ProductCard';
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
      <View>
        <FlatList
          data={products}
          renderItem={({ item }) => {
            const { id, title, price, imgUrl } = item;
            return (
              <ProductCard
                key={id}
                id={id}
                title={title}
                price={price}
                imgUrl={imgUrl}
              />
            )
          }}
          horizontal
        />
      </View>
    </View>
  );
}

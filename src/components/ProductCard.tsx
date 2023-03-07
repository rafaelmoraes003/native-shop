import React, { useContext, useEffect, useState } from 'react';
import { Image, Pressable, Text, View } from 'react-native';
import CartContext from '../Context/CartContext';
import { IProduct } from '../interfaces/IProduct';
import addToLocalStorage from '../utils/addToLocalStorage';
import DropDown from './DropDown';
import styles from '../styles/productCard';

export default function ProductCard({ id, title, price, imgUrl }: IProduct) {
  const [isInLocalStorage, setIsInLocalStorage] = useState<boolean>(false);
  const [dropDownValue, setDropDownValue] = useState<number>(1);
  const { cartItems, setCartItems, update } = useContext(CartContext);

  useEffect(() => {
    if (!cartItems.length) {
      setDropDownValue(1);
      setIsInLocalStorage(false);
    } else {
      cartItems.forEach((item) => {
        if (item.id === id) {
          setDropDownValue(item.quantity as number);
          setIsInLocalStorage(true);
        }
      });
    }
  }, [update]);

  const addToCart = async (): Promise<void> => {
    let cart: IProduct[];

    if (!isInLocalStorage) {
      cart = [
        ...cartItems as IProduct[],
        { id, title, price, imgUrl, quantity: dropDownValue },
      ];
      setIsInLocalStorage(true);
    } else {
      cart = cartItems.filter((item) => item.id !== id);
      setIsInLocalStorage(false);
      setDropDownValue(1);
    }
    setCartItems(cart);
    await addToLocalStorage(cart);
  };

  return (
    <View style={styles.card}>
      <Image source={{ uri: imgUrl }} style={styles.image} />
      <Text style={styles.title}>{title}</Text>
      <Text style={styles.price}>{`R$${price.toFixed(2).replace('.', ',')}`}</Text>
      <DropDown
        value={dropDownValue}
        setValue={setDropDownValue}
        enabled={!isInLocalStorage}
      />
      <Pressable
        onPress={addToCart}
        style={{
          ...styles.button,
          backgroundColor: isInLocalStorage ? '#f24747' : '#7159C1',
        }}
      >
        <Text style={styles.buttonText}>
          {isInLocalStorage ? 'Remover do carrinho' : 'Adicionar ao carrinho'}
        </Text>
      </Pressable>
    </View>
  );
}

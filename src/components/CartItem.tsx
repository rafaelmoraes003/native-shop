import React, { useContext, useState } from 'react';
import { Image, Text, View } from 'react-native';
import CartContext from '../Context/CartContext';
import { IProduct } from '../interfaces/IProduct';
import DropDown from './DropDown';
import styles from '../styles/cartItem';
import addToLocalStorage from '../utils/addToLocalStorage';

export default function CartItem({ id, title, price, imgUrl, quantity }: IProduct) {
  const [dropDownValue, setDropDownValue] = useState<number>(quantity as number);
  const { cartItems, setCartItems, setUpdate } = useContext(CartContext);

  const handleQuantities = async (value: number): Promise<void> => {
    const updatedProducts: IProduct[] = cartItems.map((item) => {
      if (item.id === id) {
        item.quantity = value;
      }
      return item;
    });
    setDropDownValue(value);
    setCartItems(updatedProducts);
    setUpdate((prev) => prev + 1);
    await addToLocalStorage(updatedProducts);
  };

  return (
    <View style={styles.container}>
      <View style={styles.info}>
        <Image source={{ uri: imgUrl }} style={styles.image} />
        <View>
          <Text style={styles.title}>{title}</Text>
          <Text style={styles.price}>{`Preço Un: R$${price.toFixed(2).replace('.', ',')}`}</Text>
        </View>
      </View>
      <View>
        <DropDown
          value={dropDownValue}
          setValue={handleQuantities}
          enabled
        />
        <Text style={{ ...styles.price, fontSize: 21, margin: 5 }}>
          {`Preço total: R$${(price * dropDownValue).toFixed(2).replace('.', ',')}`}
        </Text>
      </View>
    </View>
  );
}

import React, { useContext, useState } from 'react';
import { Image, Text, View } from 'react-native';
import CartContext from '../Context/CartContext';
import { IProduct } from '../interfaces/IProduct';
import DropDown from './DropDown';
import styles from '../styles/cartItem';

export default function CartItem({ id, title, price, imgUrl, quantity }: IProduct) {
  const [dropDownValue, setDropDownValue] = useState<number>(quantity as number);
  const { cartItems, setCartItems, setUpdate } = useContext(CartContext);

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
          setValue={setDropDownValue}
          enabled
        />
        <Text style={{ ...styles.price, fontSize: 21, margin: 5 }}>
          {`Preço total: R$${(price * dropDownValue).toFixed(2).replace('.', ',')}`}
        </Text>
      </View>
    </View>
  );
}

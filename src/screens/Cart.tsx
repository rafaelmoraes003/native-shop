import React, { useContext } from 'react';
import { Alert, FlatList, View } from 'react-native';
import Header from '../components/Header';
import CartContext from '../Context/CartContext';
import CartItem from '../components/CartItem';
import { NavigationProp } from '../interfaces/NavigationProp';
import addToLocalStorage from '../utils/addToLocalStorage';

export default function Cart({ navigation }: NavigationProp) {
  const { cartItems, setCartItems, setUpdate } = useContext(CartContext);

  return (
    <View>
      <Header navigation={navigation} />
      <View>
        <FlatList
          data={cartItems}
          renderItem={({ item }) => (
            <CartItem
              key={item.id}
              id={item.id}
              title={item.title}
              price={item.price}
              quantity={item.quantity}
              imgUrl={item.imgUrl}
            />
          )}
        />
      </View>
    </View>
  );
}

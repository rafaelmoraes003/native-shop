import React, { useContext } from 'react';
import { Alert, FlatList, Pressable, Text, View } from 'react-native';
import Header from '../components/Header';
import CartContext from '../Context/CartContext';
import CartItem from '../components/CartItem';
import { NavigationProp } from '../interfaces/NavigationProp';
import addToLocalStorage from '../utils/addToLocalStorage';
import styles from '../styles/cart';
import TotalPrice from '../components/TotalPrice';

export default function Cart({ navigation }: NavigationProp) {
  const { cartItems, setCartItems, setUpdate } = useContext(CartContext);

  const finishShopping = (): void => {
    Alert.alert(
      'Compra finalizada!',
      'Seus produtos chegarão em breve.',
      [{
        onPress: async () => {
          await addToLocalStorage([]);
          setCartItems([]);
          setUpdate((prev) => prev + 1);
          navigation.goBack();
        },
      }],
    );
  };

  return (
    <View style={styles.container}>
      <Header navigation={navigation} />
      <View style={styles.list}>
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
        <TotalPrice />
      </View>
      <View style={styles.buttonArea}>
        <Pressable
          disabled={!cartItems.length}
          onPress={finishShopping}
          style={styles.button}
        >
          <Text style={styles.buttonText}>Finalizar</Text>
        </Pressable>
      </View>
    </View>
  );
}

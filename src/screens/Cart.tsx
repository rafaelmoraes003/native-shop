import React, { useContext } from 'react';
import { Alert, FlatList, Pressable, Text, View } from 'react-native';
import Header from '../components/Header';
import CartContext from '../Context/CartContext';
import CartItem from '../components/CartItem';
import { NavigationProp } from '../interfaces/NavigationProp';
import addToLocalStorage from '../utils/addToLocalStorage';

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
      <View>
        <Pressable
          disabled={!cartItems.length}
          onPress={finishShopping}
        >
          <Text>Finalizar</Text>
        </Pressable>
      </View>
    </View>
  );
}

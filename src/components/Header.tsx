import React, { useContext } from 'react';
import {
  Image,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import CartContext from '../Context/CartContext';
import logo from '../assets/logo.png';
import styles from '../styles/header';
import { NavigationProp } from '../interfaces/NavigationProp';

function Header({ navigation }: NavigationProp) {
  const { cartItems } = useContext(CartContext);

  return (
    <View style={styles.container}>
      <View style={styles.logo}>
        <Text style={styles.logoText}>NATIVESHOP</Text>
        <Image source={logo} style={{ width: 35, height: 24 }} />
      </View>
      <TouchableOpacity
        onPress={() => navigation.navigate('Cart')}
        style={styles.cart}
      >
        <Text style={styles.cartMainText}>Meu Carrinho</Text>
        <Text style={styles.cartSubText}>{`${cartItems.length} item(s)`}</Text>
      </TouchableOpacity>
    </View>
  );
}

export default Header;

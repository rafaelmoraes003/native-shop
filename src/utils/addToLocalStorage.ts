import AsyncStorage from '@react-native-async-storage/async-storage';
import { IProduct } from '../interfaces/IProduct';

const addToLocalStorage = async (product: IProduct): Promise<void> => {
  await AsyncStorage.setItem('cart', JSON.stringify(product));
}

export default addToLocalStorage;

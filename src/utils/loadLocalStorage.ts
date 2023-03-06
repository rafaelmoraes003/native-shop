import AsyncStorage from '@react-native-async-storage/async-storage';
import { IProduct } from '../interfaces/IProduct';

const loadLocalStorage = async (): Promise<IProduct[]> => {
  const dataFromLocalStorage: string | null = await AsyncStorage.getItem('cart');
  if (!dataFromLocalStorage) {
    await AsyncStorage.setItem('cart', JSON.stringify([]));
    return [];
  }
  const cart = JSON.parse(dataFromLocalStorage as string) as IProduct[];
  return cart;
};

export default loadLocalStorage;

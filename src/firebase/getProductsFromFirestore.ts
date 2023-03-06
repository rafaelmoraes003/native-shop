import { getDocs, QuerySnapshot } from 'firebase/firestore';
import { IProduct } from '../interfaces/IProduct';
import productsCollection from './config';

const getProductsFromFirestore = async (): Promise<IProduct[]> => {
  const products: IProduct[] = [];

  const querySnapshot: QuerySnapshot = await getDocs(productsCollection);

  querySnapshot.forEach((product) => {
    products.push({ id: product.id, ...product.data() } as IProduct);
  });

  return products;
};

export default getProductsFromFirestore;

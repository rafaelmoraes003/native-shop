import { getDocs, QuerySnapshot } from 'firebase/firestore';
import { IProducts } from '../interfaces/IProducts';
import productsCollection from './config';

const getProductsFromFirestore = async (): Promise<IProducts[]> => {
  const products: IProducts[] = [];

  const querySnapshot: QuerySnapshot = await getDocs(productsCollection);

  querySnapshot.forEach((product) => {
    products.push({ id: product.id, ...product.data() } as IProducts);
  });

  return products;
};

export default getProductsFromFirestore;

import { addDoc } from 'firebase/firestore';
import productsCollection from './config';
import productsMock from './productsMock';

const addProductsToFirestore = async (): Promise<void> => {
  await Promise.all([productsMock.map((product) => (
    addDoc(productsCollection, product)
  ))]);
};

const seeder = async (): Promise<void> => {
  try {
    await addProductsToFirestore();
    console.log('Products added to Firestore successfully!');
  } catch (err) {
    const error = err as Error;
    console.log(error.message);
  }
};

seeder();

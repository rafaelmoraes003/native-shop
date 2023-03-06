import { FirebaseApp, initializeApp } from 'firebase/app';

import {
  collection,
  CollectionReference,
  Firestore,
  getFirestore,
} from 'firebase/firestore';

import {
  API_KEY,
  AUTH_DOMAIN,
  PROJECT_ID,
  STORAGE_BUCKET,
  MESSAGING_SENDER_ID,
  APP_ID,
} from '@env';

interface FirebaseConfig {
  apiKey: string,
  authDomain: string,
  projectId: string,
  storageBucket: string,
  messagingSenderId: string,
  appId: string,
}

const firebaseConfig: FirebaseConfig = {
  apiKey: API_KEY,
  authDomain: AUTH_DOMAIN,
  projectId: PROJECT_ID,
  storageBucket: STORAGE_BUCKET,
  messagingSenderId: MESSAGING_SENDER_ID,
  appId: APP_ID,
};

const app: FirebaseApp = initializeApp(firebaseConfig);

const firestore: Firestore = getFirestore(app);

const productsCollection: CollectionReference = collection(firestore, 'products');

export default productsCollection;

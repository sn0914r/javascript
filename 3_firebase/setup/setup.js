import KEYS from './key.js';

import { initializeApp } from 'firebase/app';

import { getFirestore } from "firebase/firestore";
import { getDatabase } from 'firebase/database';
import { getAuth } from 'firebase/auth';

const firebaseConfig = {
  apiKey: KEYS.apiKey,
  authDomain: KEYS.authDomain,
  databaseURL: KEYS.databaseURL,
  projectId: KEYS.projectId,
  storageBucket: KEYS.storageBucket,
  messagingSenderId: KEYS.messagingSenderId,
  appId: KEYS.appId
};

const app = initializeApp(firebaseConfig);

const firestoreDB = getFirestore(app);
const realtimeDB = getDatabase(app);
const authentication = getAuth(app);

export { firestoreDB, realtimeDB, authentication };
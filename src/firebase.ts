// src/firebase.js
import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
  apiKey: 'AIzaSyDWACeA8jUoE1-QRUPBdnie0txH76ajZmI',
  authDomain: 'kiss-me-95d07.firebaseapp.com',
  projectId: 'kiss-me-95d07',
  storageBucket: 'kiss-me-95d07.appspot.com',
  messagingSenderId: '1048312860468',
  appId: '1:1048312860468:web:57596c3d957269b4041f61',
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export { db };

import { initializeApp } from 'firebase/app';
import { getFirestore, Timestamp } from 'firebase/firestore';
import { getAuth } from 'firebase/auth';

const firebaseConfig = {
  apiKey: 'AIzaSyAsOH5C5vGoDbhYLyVnD9mCLtqb1vKcXGI',
  authDomain: 'moneypath-f93f5.firebaseapp.com',
  projectId: 'moneypath-f93f5',
  storageBucket: 'moneypath-f93f5.appspot.com',
  messagingSenderId: '572296809277',
  appId: '1:572296809277:web:e3ee89dde23c6805f01354',
};

// init firebase & firestore
initializeApp(firebaseConfig);
const db = getFirestore();

// init auth
const auth = getAuth();

// timestamp
const timestamp = Timestamp;

export { db, timestamp, auth };

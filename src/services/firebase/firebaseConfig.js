// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: 'AIzaSyCj0tYMtnzkLotuXJKiKJpdo2ICSpuEpAo',
  authDomain: 'freelo-ecom.firebaseapp.com',
  projectId: 'freelo-ecom',
  storageBucket: 'freelo-ecom.appspot.com',
  messagingSenderId: '473945389852',
  appId: '1:473945389852:web:0229fa887b2bc7ec1e58d9',
  measurementId: 'G-HH72C6BZCK',
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);

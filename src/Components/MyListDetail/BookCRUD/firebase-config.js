import { getFirestore } from "firebase/firestore";
import firebase from "firebase/compat/app";
import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyD5QORTQIOyCBUST2vlGE8XotjxQYCxn84",
  authDomain: "react-crud-47737.firebaseapp.com",
  projectId: "react-crud-47737",
  storageBucket: "react-crud-47737.appspot.com",
  messagingSenderId: "332220815633",
  appId: "1:332220815633:web:1f885a3cea41e2b1bfd4b0",
};

// Initialize Firebase
const app = firebase.initializeApp(firebaseConfig);

export const db = getFirestore(app);

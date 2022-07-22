import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyDg3Tzx3YyMN45pVqwA2aK4fKQiZKztjwk",
  authDomain: "login-774e9.firebaseapp.com",
  projectId: "login-774e9",
  storageBucket: "login-774e9.appspot.com",
  messagingSenderId: "167405295945",
  appId: "1:167405295945:web:29af998130908f7ef6a298",
};

const fire = firebase.initializeApp(firebaseConfig);

export default fire;

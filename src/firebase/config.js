// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDpeB6ezUyrfVkFxAYf78aO6dSH6kOzVek",
  authDomain: "ecommerce-larose.firebaseapp.com",
  projectId: "ecommerce-larose",
  storageBucket: "ecommerce-larose.appspot.com",
  messagingSenderId: "534489045253",
  appId: "1:534489045253:web:66e020c138de47f20ebf6c"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

//funcion que importamos en proyecto de react
export const firestoreInit = ()=> app;
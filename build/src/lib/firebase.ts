// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";
import { getStorage } from "firebase/storage";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCNNF4zdQHCI5hFHF8TkhMm829V6ZbC3vw",
  authDomain: "first-project-39d6e.firebaseapp.com",
  projectId: "first-project-39d6e",
  storageBucket: "first-project-39d6e.appspot.com",
  messagingSenderId: "963070398206",
  appId: "1:963070398206:web:5027be9cf349ca0a5c9faf",
  measurementId: "G-NNLQWLC5PS"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig)
export const db = getFirestore()
export const auth = getAuth()
export const storage = getStorage()

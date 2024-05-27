// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
import { getFirestore, doc, setDoc } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyD7tyfXUeFibM0m6jFz2bxhDPn8XvPe2AI",
  authDomain: "financely-d33fb.firebaseapp.com",
  projectId: "financely-d33fb",
  storageBucket: "financely-d33fb.appspot.com",
  messagingSenderId: "421419411178",
  appId: "1:421419411178:web:3fface09e5ad1a4dd55993",
  measurementId: "G-FX56WW8KD8"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const auth = getAuth(app);
const provider = new GoogleAuthProvider();

export { db, auth, provider, doc, setDoc };
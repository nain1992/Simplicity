import { initializeApp } from "firebase/app";
import { getDatabase, ref, push, set } from "firebase/database";
import { getFirestore, collection, addDoc } from "firebase/firestore";

// Replace with your Firebase project configuration
const firebaseConfig = {
  apiKey: "AIzaSyCjXRjOgCXntKMMsvZ26HGVfQXFtFz2UTE",
  authDomain: "postier-180d4.firebaseapp.com",
  projectId: "postier-180d4",
  storageBucket: "postier-180d4.appspot.com",
  messagingSenderId: "544612227164",
  appId: "1:544612227164:web:865bebd9e06cd27be2ee99",
  measurementId: "G-HJ7S2C73FJ",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const database = getDatabase(app);
export const firestore = getFirestore(app);

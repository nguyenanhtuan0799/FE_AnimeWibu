import { initializeApp } from "firebase/app";
import {getAuth}  from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";
// TODO: Add SDKs for Firebase products that you want to use

const firebaseConfig = {
  apiKey: process.env.REACT_APP_API_KEY_FIREBASE,
  authDomain: "authentication-anime-movie.firebaseapp.com",
  projectId: "authentication-anime-movie",
  storageBucket: "authentication-anime-movie.appspot.com",
  messagingSenderId: "218487216096",
  appId: "1:218487216096:web:5c70ca9450d3fb7efdbd85",
  measurementId: "G-FHVZLL9ZJX"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const auth = getAuth(app);
export const storage = getStorage(app);
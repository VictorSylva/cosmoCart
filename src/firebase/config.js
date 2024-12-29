import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth"
import { getFirestore } from "firebase/firestore"
import { getStorage } from "firebase/storage"

// Your web app's Firebase configuration
export const firebaseConfig = {
  apiKey: process.env.REACT_APP_FB_API_KEY,
  authDomain: "auth-dev2-e137d.firebaseapp.com",
  projectId: "auth-dev2-e137d",
  storageBucket: "auth-dev2-e137d.appspot.com",
  messagingSenderId: "88758203488",
  appId: "1:88758203488:web:abcf0b31b78f168ba2ff05",
  measurementId: "G-0CTCYQ3XNC"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);
export const storage = getStorage(app);

export default app;

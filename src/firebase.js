import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyCNc0w5fYZXeAI5cAvx7jSc6_4xwVMvqCM",
  authDomain: "character-database-9616a.firebaseapp.com",
  projectId: "character-database-9616a",
  storageBucket: "character-database-9616a.firebasestorage.app",
  messagingSenderId: "141316339872",
  appId: "1:141316339872:web:47511590cdf5dbf30db1c5"
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
export const googleProvider = new GoogleAuthProvider();
export const db = getFirestore(app); 

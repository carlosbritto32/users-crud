// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getStorage } from "firebase/storage";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyBMSmUWfueruByYHGn6k9-WJ6zkuJKp1mE",
  authDomain: "users-crud-227a2.firebaseapp.com",
  projectId: "users-crud-227a2",
  storageBucket: "users-crud-227a2.appspot.com",
  messagingSenderId: "202597022108",
  appId: "1:202597022108:web:4c5141f839431a16513059",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const storage = getStorage(app);
export const db = getFirestore(app);

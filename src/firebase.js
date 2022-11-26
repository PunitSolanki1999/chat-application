import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyBeyslLzrvgcfV4ubNOgUOsbc4Ji4VW1OQ",
  authDomain: "chat-application-e7e7c.firebaseapp.com",
  projectId: "chat-application-e7e7c",
  storageBucket: "chat-application-e7e7c.appspot.com",
  messagingSenderId: "708103808864",
  appId: "1:708103808864:web:58a7038f82943a26c6a005"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth();
export const storage = getStorage();
export const db = getFirestore();

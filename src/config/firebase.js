// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
const firebaseConfig = {
  apiKey: "AIzaSyDXGeNfvou4DSsFjhW5_c45q8-eA_Tc7K0",
  authDomain: "vitecontact-3cdb8.firebaseapp.com",
  projectId: "vitecontact-3cdb8",
  storageBucket: "vitecontact-3cdb8.appspot.com",
  messagingSenderId: "630033581288",
  appId: "1:630033581288:web:4016c553a2b7a2f943b55d"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
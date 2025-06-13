// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAxGPHZzCCMJGV1VVeFj16aRzx5_n4QF24",
  authDomain: "pdm-gerenciador-assinatura.firebaseapp.com",
  projectId: "pdm-gerenciador-assinatura",
  storageBucket: "pdm-gerenciador-assinatura.firebasestorage.app",
  messagingSenderId: "201538871564",
  appId: "1:201538871564:web:9db1a3c498e950bea2a929"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const db = getFirestore(app);

export { db };
import {getAuth, GoogleAuthProvider} from 'firebase/auth'
import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_APIKEY,
  authDomain: "loginvastra-6ca34.firebaseapp.com",
  projectId: "loginvastra-6ca34",
  storageBucket: "loginvastra-6ca34.firebasestorage.app",
  messagingSenderId: "878516654728",
  appId: "1:878516654728:web:ef16aaae290b72ab06c53d"
};

const app = initializeApp(firebaseConfig);
const auth=getAuth(app)
const provider=new GoogleAuthProvider()

export{auth,provider}
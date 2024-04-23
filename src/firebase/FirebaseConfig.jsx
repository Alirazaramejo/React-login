// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth} from 'firebase/auth';
// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCmsJN0o8lx449STXFsSMxhdnTCbugMzPc",
  authDomain: "auth-2b38f.firebaseapp.com",
  projectId: "auth-2b38f",
  storageBucket: "auth-2b38f.appspot.com",
  messagingSenderId: "1011260223582",
  appId: "1:1011260223582:web:a0c50b23a374852cfe84cf"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
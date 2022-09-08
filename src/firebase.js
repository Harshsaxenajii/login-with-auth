import { initializeApp } from "firebase/app";
import {getAuth} from "firebase/auth"

const firebaseConfig = {
  apiKey: "AIzaSyD5CVFYWyPwSTVXvlR50Ym9jbxvv9S3vIg",
  authDomain: "harsh-auth.firebaseapp.com",
  projectId: "harsh-auth",
  storageBucket: "harsh-auth.appspot.com",
  messagingSenderId: "631182003715",
  appId: "1:631182003715:web:8ec90471b810370e17c836",
  measurementId: "G-NQQGHJ02ZS",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export default app;

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth} from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyA1aruO9SeJf01bCsS50EFafwLPHeLnGb0",
  authDomain: "signature-3ccc2.firebaseapp.com",
  projectId: "signature-3ccc2",
  storageBucket: "signature-3ccc2.appspot.com",
  messagingSenderId: "579228566637",
  appId: "1:579228566637:web:29b0b185449df7fbf26b64",
  measurementId: "G-WK07E98RJ7"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const analytics = getAnalytics(app);
export const auth=getAuth(app)
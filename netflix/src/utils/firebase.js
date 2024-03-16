// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth} from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDVkuqU2xWA2rAdgUVotnVgAuZVi_ZmeeI",
  authDomain: "netflixgpt-aaaa6.firebaseapp.com",
  projectId: "netflixgpt-aaaa6",
  storageBucket: "netflixgpt-aaaa6.appspot.com",
  messagingSenderId: "837197790627",
  appId: "1:837197790627:web:ad7608ea6385e0a859ee16",
  measurementId: "G-3TH7GXMLEV"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const auth = getAuth();
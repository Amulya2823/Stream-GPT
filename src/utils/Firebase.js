// Import the functions you need from the SDKs you need
import { getAuth } from "firebase/auth";
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBgrmrKsNrUqY1izu_qQlAb_E_f2H2IIKA",
  authDomain: "netflix-490a8.firebaseapp.com",
  projectId: "netflix-490a8",
  storageBucket: "netflix-490a8.appspot.com",
  messagingSenderId: "932995152252",
  appId: "1:932995152252:web:7752bb530c890f39014cf9",
  measurementId: "G-HXRW1HDCC1"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const auth = getAuth();
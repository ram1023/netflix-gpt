// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAtQL5p7gutcY3QKQxiccEY-MSCQC85ke4",
  authDomain: "netflix-gpt-1023.firebaseapp.com",
  projectId: "netflix-gpt-1023",
  storageBucket: "netflix-gpt-1023.firebasestorage.app",
  messagingSenderId: "59588871710",
  appId: "1:59588871710:web:ff1077ceb5197c56cb900f",
  measurementId: "G-H9MV9CZXXW"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth();

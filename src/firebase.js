// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import { getFirestore } from "firebase/firestore";
// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBGPz9a_jT4ngeqbZakNVUYIF4maKcDKYA",
  authDomain: "test-828ca.firebaseapp.com",
  projectId: "test-828ca",
  storageBucket: "test-828ca.appspot.com",
  messagingSenderId: "476972058849",
  appId: "1:476972058849:web:9a2dbeec02d299520b0fa0"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const firestore = getFirestore(app);
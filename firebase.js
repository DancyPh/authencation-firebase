// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBj9FVh2A2KsXsFPKvL7cA8zqvNYQbwZgU",
  authDomain: "crud-user-627ea.firebaseapp.com",
  projectId: "crud-user-627ea",
  storageBucket: "crud-user-627ea.appspot.com",
  messagingSenderId: "306026483375",
  appId: "1:306026483375:web:453eec9c170455da4d8e5a",
  measurementId: "G-SDT8E9Y08K"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export { auth };
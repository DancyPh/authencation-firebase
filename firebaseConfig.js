// firebaseConfig.js
import firebase from 'firebase/app';
import {getFirestore} from 'firebase/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyBj9FVh2A2KsXsFPKvL7cA8zqvNYQbwZgU",
  authDomain: "crud-user-627ea.firebaseapp.com",
  projectId: "crud-user-627ea",
  storageBucket: "crud-user-627ea.appspot.com",
  messagingSenderId: "306026483375",
  appId: "1:306026483375:web:453eec9c170455da4d8e5a",
  measurementId: "G-SDT8E9Y08K"
};

if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
}

const db = getFirestore(firebase);
export { db };
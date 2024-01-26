import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore"

const firebaseConfig = {
  apiKey: "AIzaSyDZvtT7PKM0mpah8S-pBFnIQkn5oQekV8M",
  authDomain: "primer-e-commerse.firebaseapp.com",
  projectId: "primer-e-commerse",
  storageBucket: "primer-e-commerse.appspot.com",
  messagingSenderId: "367864103096",
  appId: "1:367864103096:web:9d921d7e7a38edb187b44d"
};

// Inicia Firebase
initializeApp(firebaseConfig);

const db = getFirestore()

export default db

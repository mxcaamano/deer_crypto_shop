// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAmLOKww2S-zvdhhJcs-FBCwVb6ncgM11M",
  authDomain: "deercrypto-shop.firebaseapp.com",
  projectId: "deercrypto-shop",
  storageBucket: "deercrypto-shop.appspot.com",
  messagingSenderId: "897886118279",
  appId: "1:897886118279:web:c57e2a0ce7928bd1383322"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export default db;
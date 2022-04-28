// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAbld8fh9GG-JDCZu4juvcFevv-bvrdwtQ",
  authDomain: "thirstydrinks-11.firebaseapp.com",
  projectId: "thirstydrinks-11",
  storageBucket: "thirstydrinks-11.appspot.com",
  messagingSenderId: "202458021821",
  appId: "1:202458021821:web:9f4e77fb1ad874effa5cd4"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app)

export default auth;
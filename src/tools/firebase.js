// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBJ37FYJqORCcOWfgcoBn4n1-QlDWUti8s",
  authDomain: "socialmediasavior-f344e.firebaseapp.com",
  projectId: "socialmediasavior-f344e",
  storageBucket: "socialmediasavior-f344e.appspot.com",
  messagingSenderId: "56642166243",
  appId: "1:56642166243:web:ad5aa213edbe1043a3d4d6",
  measurementId: "G-LMD2YFW11F"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
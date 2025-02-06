// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDY4OT2BhKDdnisAC3dOs5a3XNbumb34bg",
  authDomain: "my-portfolio-5665c.firebaseapp.com",
  projectId: "my-portfolio-5665c",
  storageBucket: "my-portfolio-5665c.firebasestorage.app",
  messagingSenderId: "292157724616",
  appId: "1:292157724616:web:8f03cd5e4f67c4cb6052fd",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app; // Export the initialized app for use in other components.

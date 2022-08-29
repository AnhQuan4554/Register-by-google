// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyC0yVyPFWqKMbQijNTjpyV3Etvbh7JIkfs",
  authDomain: "authen-81028.firebaseapp.com",
  projectId: "authen-81028",
  storageBucket: "authen-81028.appspot.com",
  messagingSenderId: "883343243485",
  appId: "1:883343243485:web:632041a271f19a6ce18334"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
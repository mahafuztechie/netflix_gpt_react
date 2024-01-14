// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDyP-X6GYzbdukVmdJH1p0CsbNxm8Tl1ko",
  authDomain: "netflixgpt-react-59565.firebaseapp.com",
  projectId: "netflixgpt-react-59565",
  storageBucket: "netflixgpt-react-59565.appspot.com",
  messagingSenderId: "124079350465",
  appId: "1:124079350465:web:545725ac1da88eacb86a40",
  measurementId: "G-QCEEZWFF44"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const auth = getAuth();
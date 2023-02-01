import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.16.0/firebase-app.js";
import { getAnalytics } from "https://www.gstatic.com/firebasejs/9.16.0/firebase-analytics.js";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAUY3WbF8y3NYuyLDHs9FfM3WFO3lXlYHk",
  authDomain: "hospital-application-d04bd.firebaseapp.com",
  projectId: "hospital-application-d04bd",
  storageBucket: "hospital-application-d04bd.appspot.com",
  messagingSenderId: "57285161450",
  appId: "1:57285161450:web:ba82f89f4356474dc24293",
  measurementId: "G-63GMSHSFD9",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
firebase.firestore().settings({ timestampsInSnapShots: true });
export default firebase;

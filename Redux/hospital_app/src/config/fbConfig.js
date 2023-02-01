import firebase from "firebase/app";
import {store} from '../redux/store'
import "firebase/auth";
import "firebase/firestore";

import { initializeApp } from "https://www.gstatic.com/firebasejs/9.16.0/firebase-app.js";
import { getAnalytics } from "https://www.gstatic.com/firebasejs/9.16.0/firebase-analytics.js";
export const firebaseConfig = {
  apiKey: "AIzaSyAUY3WbF8y3NYuyLDHs9FfM3WFO3lXlYHk",
  authDomain: "hospital-application-d04bd.firebaseapp.com",
  projectId: "hospital-application-d04bd",
  storageBucket: "hospital-application-d04bd.appspot.com",
  messagingSenderId: "57285161450",
  appId: "1:57285161450:web:ba82f89f4356474dc24293",
  measurementId: "G-63GMSHSFD9",
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);
firebase.firestore().settings({ timestampsInSnapshots: true })

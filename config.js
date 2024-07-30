import { initializeApp, getApp } from 'https://www.gstatic.com/firebasejs/10.12.4/firebase-app.js'
import { getFirestore } from 'https://www.gstatic.com/firebasejs/10.12.4/firebase-firestore.js'
const firebaseConfig = {
    apiKey: "AIzaSyCmFXHAPPNwwYsZzWFXM_7n2dLmoDKNd6I",
    authDomain: "firestore-43f66.firebaseapp.com",
    projectId: "firestore-43f66",
    storageBucket: "firestore-43f66.appspot.com",
    messagingSenderId: "961344362588",
    appId: "1:961344362588:web:290aac3a3b1db160402e99",
    measurementId: "G-WR7JEBHBCT"
  };
  export const app = initializeApp(firebaseConfig);
const firebaseApp = getApp();
export const db = getFirestore(app);

import { initializeApp } from 'firebase/app';
import { getAuth } from "firebase/auth"
import { getDatabase } from "firebase/database"
//import 'dotenv/config';
// import { 
//     REACT_APP_FIREBASE_API_KEY, 
//     REACT_APP_FIREBASE_AUTH_DOMAIN, 
//     REACT_APP_FIREBASE_PROJECT_ID, 
//     REACT_APP_FIREBASE_STORAGE_BUCKET,
//     REACT_APP_FIREBASE_MESSAGING_SENDER_ID,
//     REACT_APP_FIREBASE_APP_ID,
//     REACT_APP_FIREBASE_MEASUREMENT_ID
// } from '@env';

// require('dotenv').config({ path:'../.env'});

// Initialize Firebase
const firebaseConfig = {
    apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
    authDomain: process.env.REACT_APP_FIREBASE_AUTH_DOMAIN,
    projectId: process.env.REACT_APP_FIREBASE_PROJECT_ID,
    storageBucket: process.env.REACT_APP_FIREBASE_STORAGE_BUCKET,
    messagingSenderId: process.env.REACT_APP_FIREBASE_MESSAGING_SENDER_ID,
    appId: process.env.REACT_APP_FIREBASE_APP_ID,
    measurementId: process.env.REACT_APP_FIREBASE_MEASUREMENT_ID
};
const app = initializeApp(firebaseConfig);
const auth = getAuth()
const db = getDatabase()
// For more information on how to access Firebase in your project,
// see the Firebase documentation: https://firebase.google.com/docs/web/setup#access-firebase
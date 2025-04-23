// src/lib/firebase.ts
import { initializeApp } from 'firebase/app';
import { getAnalytics } from "firebase/analytics";
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyDeSNDUcftj3Gh3jJhOU_rxvoT_WGaGkh0",
    authDomain: "dondduu.firebaseapp.com",
    projectId: "dondduu",
    storageBucket: "dondduu.firebasestorage.app",
    messagingSenderId: "673330161854",
    appId: "1:673330161854:web:3da041adf56e61df95d6ef",
    measurementId: "G-70W25SSX0H"
};

const app = initializeApp(firebaseConfig);
export const analytics = getAnalytics(app);
export const auth = getAuth(app);
export const db = getFirestore(app);

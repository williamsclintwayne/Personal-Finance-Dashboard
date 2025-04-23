import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';
import { getAnalytics } from "firebase/analytics";

const firebaseConfig = {
    apiKey: "AIzaSyB81Vym56NKgEp4CkY_4epq2X3nMfFUqFM",
    authDomain: "personal-finance-dashboa-c72b1.firebaseapp.com",
    projectId: "personal-finance-dashboa-c72b1",
    storageBucket: "personal-finance-dashboa-c72b1.firebasestorage.app",
    messagingSenderId: "1004217462702",
    appId: "1:1004217462702:web:f82f51aef4efca0eb3a23f",
    measurementId: "G-HJS2BGHMLX"
  };

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);
const analytics = getAnalytics(app);

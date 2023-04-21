import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore"

const firebaseConfig = {
    apiKey: "AIzaSyDrepLXB0Kj84MfWH01bfvDU6_uV8pOdVc",
    authDomain: "upshop-8a71a.firebaseapp.com",
    projectId: "upshop-8a71a",
    storageBucket: "upshop-8a71a.appspot.com",
    messagingSenderId: "75532702558",
    appId: "1:75532702558:web:36a0ea4641778f6f4035cf"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
export default db;
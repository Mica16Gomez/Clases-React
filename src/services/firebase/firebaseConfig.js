import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore"

const firebaseConfig = {
    apiKey: "AIzaSyBOWCP2OOXPcp44V5eU8Rw80PQBIScmZLQ",
    authDomain: "clasesreact-6e139.firebaseapp.com",
    projectId: "clasesreact-6e139",
    storageBucket: "clasesreact-6e139.appspot.com",
    messagingSenderId: "595834363052",
    appId: "1:595834363052:web:5c2c52301905a280c8d309",
    measurementId: "G-ER6KQH3Z4F"
  };

const app = initializeApp(firebaseConfig);

export const db = getFirestore(app)





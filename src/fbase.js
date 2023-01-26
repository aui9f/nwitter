import { initializeApp } from "firebase/app";


import { getFirestore, collection, addDoc, getDocs, doc, onSnapshot,
    deleteDoc
} from "firebase/firestore";
// import { getAnalytics } from "firebase/analytics";

import { getAuth , createUserWithEmailAndPassword, signInWithEmailAndPassword, onAuthStateChanged, 
    GoogleAuthProvider, signInWithPopup,
    signOut
} from "firebase/auth";

// TODO: Replace the following with your app's Firebase project configuration
const firebaseConfig = {
    apiKey: process.env.REACT_APP_API_KEY,
    authDomain: process.env.REACT_APP_DOMAIN,
    projectId: process.env.REACT_APP_ID,
    storageBucket: process.env.REACT_APP_BUCKET,
    messagingSenderId: process.env.REACT_APP_SENDER_ID,
    appId: process.env.REACT_APP_APP_ID,
    measurementId: process.env.REACT_APP_MEASUREMENT_ID,
    
    // The value of `databaseURL` depends on the location of the database
    databaseURL: "https://nwitter-8b4bf.firebaseio.com",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

// const analytics = getAnalytics(app);
const auth = getAuth(app);


export {app, 
    auth, createUserWithEmailAndPassword, signInWithEmailAndPassword, onAuthStateChanged, GoogleAuthProvider, signInWithPopup, signOut,
    db, collection, addDoc, getDocs, doc, onSnapshot,  deleteDoc
}
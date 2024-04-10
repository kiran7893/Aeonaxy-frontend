import { initializeApp, getApp, getApps } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyA7MsdQCIwvWZ3mBY-mbW8zpM0K7LTtQAQ",
  authDomain: "aeonoxy.firebaseapp.com",
  projectId: "aeonoxy",
  storageBucket: "aeonoxy.appspot.com",
  messagingSenderId: "955734342681",
  appId: "1:955734342681:web:5a2fa2cd08d9edc9e37e88",
};

// Initialize Firebase
const app = !getApps.length ? initializeApp(firebaseConfig) : getApp();

const auth = getAuth(app);
const firestore = getFirestore(app);

export { auth, firestore, app };

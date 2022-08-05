// Import the functions you need from the SDKs you need
import { getApp, getApps, initializeApp } from 'firebase/app'
import { getFirestore } from 'firebase/firestore'
import { FacebookAuthProvider, getAuth, GoogleAuthProvider } from 'firebase/auth'

const firebaseConfig = {
  apiKey: "AIzaSyAkjSn0wdCQtxlJouNdY9eGfnUFvqgSfKY",
  authDomain: "cammy-de9f2.firebaseapp.com",
  projectId: "cammy-de9f2",
  storageBucket: "cammy-de9f2.appspot.com",
  messagingSenderId: "27329517890",
  appId: "1:27329517890:web:62b6569f41b7ec8a2bd0db",
  measurementId: "G-41LTFHND3H"
};

// Initialize Firebase
const app = getApps().length ? getApp() : initializeApp(firebaseConfig)

const db = getFirestore(app)

const auth = getAuth(app)

const fbProvider = new FacebookAuthProvider()

export { db, auth, fbProvider }
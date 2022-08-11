import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';
import 'firebase/compat/analytics';

const firebaseConfig = {
  apiKey: "AIzaSyAkjSn0wdCQtxlJouNdY9eGfnUFvqgSfKY",
  authDomain: "cammy-de9f2.firebaseapp.com",
  projectId: "cammy-de9f2",
  storageBucket: "cammy-de9f2.appspot.com",
  messagingSenderId: "27329517890",
  appId: "1:27329517890:web:62b6569f41b7ec8a2bd0db",
  measurementId: "G-41LTFHND3H"
};

firebase.initializeApp(firebaseConfig);
firebase.analytics();

const auth = firebase.auth();
const db = firebase.firestore();

export { db, auth }

export default firebase
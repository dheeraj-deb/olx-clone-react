import firebase from "firebase";
import "firebase/auth";
import "firebase/firebase";
import "firebase/storage";
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyA_HCFBZHHPL2O06pGhKvQGbBgJzuWYN-c",
  authDomain: "olx-clone-51708.firebaseapp.com",
  projectId: "olx-clone-51708",
  storageBucket: "olx-clone-51708.appspot.com",
  messagingSenderId: "62254570968",
  appId: "1:62254570968:web:67c01066ed0393d2d826ad",
  measurementId: "G-WKE9EKWGYD",
};
export default firebase.initializeApp(firebaseConfig);

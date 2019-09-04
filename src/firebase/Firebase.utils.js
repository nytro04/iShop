import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

const config = {
  apiKey: "AIzaSyAyFOEjXbSyNXkh8j3CxktAPSH3LqtowHM",
  authDomain: "ishopdb-4edfa.firebaseapp.com",
  databaseURL: "https://ishopdb-4edfa.firebaseio.com",
  projectId: "ishopdb-4edfa",
  storageBucket: "",
  messagingSenderId: "872294179642",
  appId: "1:872294179642:web:533bc2c02ec4b708"
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: "select_account" });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;

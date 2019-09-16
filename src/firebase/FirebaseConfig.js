import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

const config = {
  apiKey: "AIzaSyAyFOEjXbSyNXkh8j3CxktAPSH3LqtowHM",
  authDomain: "ishopdb-4edfa.firebaseapp.com",
  databaseURL: "https://ishopdb-4edfa.firebaseio.com",
  projectId: "ishopdb-4edfa",
  storageBucket: "ishopdb-4edfa.appspot.com",
  messagingSenderId: "872294179642",
  appId: "1:872294179642:web:533bc2c02ec4b708"
};

firebase.initializeApp(config);

export default firebase;

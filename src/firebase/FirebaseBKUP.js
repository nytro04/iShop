import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";
// import { reactReduxFirebase, firebaseReducer } from "react-redux-firebase";
// import { reduxFirestore, firestoreReducer } from "redux-firestore";

const config = {
  apiKey: "AIzaSyAyFOEjXbSyNXkh8j3CxktAPSH3LqtowHM",
  authDomain: "ishopdb-4edfa.firebaseapp.com",
  databaseURL: "https://ishopdb-4edfa.firebaseio.com",
  projectId: "ishopdb-4edfa",
  storageBucket: "",
  messagingSenderId: "872294179642",
  appId: "1:872294179642:web:533bc2c02ec4b708"
};

// react-redux-firebase config
export const rrfConfig = {
  userProfile: "users",
  useFirestoreForProfile: true // Firestore for Profile instead of Realtime DB
};

export const createUserProfileDoc = async (userAuth, additionalData) => {
  if (!userAuth) return;

  const userRef = firestore.doc(`users/${userAuth.uid}`);

  const snapShot = await userRef.get();

  if (!snapShot.exists) {
    const { displayName, email } = userAuth;
    const createdAt = new Date();

    try {
      await userRef.set({
        displayName,
        email,
        createdAt,
        ...additionalData
      });
    } catch (error) {
      console.log("error creating user", error.message);
    }
  }

  return userRef;
};

//Init firebase instance
firebase.initializeApp(config);

// const settings = { timestampsInSnapshots: true };

export const auth = firebase.auth();
export const firestore = firebase.firestore();
// firestore.settings(settings);

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: "select_account" });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;

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

firebase.firestore().settings({
  cacheSizeBytes: firebase.firestore.CACHE_SIZE_UNLIMITED
});

firebase.firestore().enablePersistence();

// firebase
//   .firestore()
//   .enablePersistence()
//   .catch(function(err) {
//     if (err.code == "failed-precondition") {
//       // Multiple tabs open, persistence can only be enabled
//       // in one tab at a a time.
//       // ...
//     } else if (err.code == "unimplemented") {
//       // The current browser does not support all of the
//       // features required to enable persistence
//       // ...
//     }
//   });
// Subsequent queries will use persistence, if it was enabled successfully

export default firebase;

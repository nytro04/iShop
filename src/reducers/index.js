import { combineReducers } from "redux";
import authReducers from "./authReducers";
import productReducer from "./productReducer";
import { firestoreReducer } from "redux-firestore"; // syncing firestore
import { firebaseReducer } from "react-redux-firebase";

export default combineReducers({
  auth: authReducers,
  products: productReducer,
  firestore: firestoreReducer,
  firebase: firebaseReducer
});

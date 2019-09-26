import { combineReducers } from "redux";
import authReducers from "./authReducers";
import productReducer from "./productReducer";
import cartReducer from "./cartReducers";
import { firestoreReducer } from "redux-firestore"; // syncing firestore
import { firebaseReducer } from "react-redux-firebase";

export default combineReducers({
  auth: authReducers,
  products: productReducer,
  cart: cartReducer,
  firestore: firestoreReducer,
  firebase: firebaseReducer
});

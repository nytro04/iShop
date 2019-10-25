import React from "react";
import ReactDOM from "react-dom";
// import store from "./store";
import { createStore, applyMiddleware, compose } from "redux";

import rootReducer from "./reducers";
import thunk from "redux-thunk";
import {
  createFirestoreInstance,
  reduxFirestore,
  getFirestore
} from "redux-firestore";

import { ReactReduxFirebaseProvider, getFirebase } from "react-redux-firebase";
import firebase from "./firebase/FirebaseConfig";
import { Provider } from "react-redux";
import App from "./App";
import * as serviceWorker from "./serviceWorker";
import { Spinner } from "react-bootstrap";

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const rrfConfig = {
  useFirestoreForProfile: true,
  userProfile: "users",
  attachAuthIsReady: true
};

const store = createStore(
  rootReducer,
  composeEnhancers(
    applyMiddleware(thunk.withExtraArgument({ getFirebase, getFirestore })),
    reduxFirestore(firebase, {
      useFirestoreForProfile: true,
      userProfile: "users"
    })
  )
);

const rrfProps = {
  firebase,
  config: rrfConfig,
  dispatch: store.dispatch,
  createFirestoreInstance
};

ReactDOM.render(
  <Provider store={store}>
    <ReactReduxFirebaseProvider {...rrfProps}>
      <App />
      <Spinner />
    </ReactReduxFirebaseProvider>
  </Provider>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();

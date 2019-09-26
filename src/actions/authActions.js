import {
  SET_CURRENT_USER,
  LOGIN_SUCCESS,
  SIGNOUT_SUCCESS,
  SIGNUP_SUCCESS
} from "./types";

import history from "../history";

// register User
export const registerUser = userData => (
  dispatch,
  getState,
  { getFirebase, getFirestore }
) => {
  const { firstName, lastName, email, password } = userData;

  const firebase = getFirebase();
  const firestore = getFirestore();

  firebase
    .auth()
    .createUserWithEmailAndPassword(email, password)
    .then(response => {
      return firestore
        .collection("users")
        .doc(response.user.uid)
        .set({
          firstName,
          lastName,
          initials: firstName[0] + lastName[0]
        });
    })
    .then(() => {
      dispatch({ type: SIGNUP_SUCCESS });
      history.push("/");
    })
    .catch(err => {
      console.log(err);
    });
};

// login user with email and password
export const loginUser = userData => (dispatch, getState, { getFirebase }) => {
  const { email, password } = userData;

  const firebase = getFirebase();

  firebase
    .auth()
    .signInWithEmailAndPassword(email, password)
    .then(() => {
      dispatch({ type: LOGIN_SUCCESS });
      history.push("/");
    })
    .catch(error => {
      console.log("Error logging In user", error);
    });
};

export const signOut = () => (dispatch, getState, { getFirebase }) => {
  const firebase = getFirebase();

  firebase
    .auth()
    .signOut()
    .then(() => {
      dispatch({ type: SIGNOUT_SUCCESS });
    });
};

//set logged in user
export const setCurrentUser = user => {
  return {
    type: SET_CURRENT_USER,
    payload: user
  };
};

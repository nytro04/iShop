import { SET_CURRENT_USER, LOGIN_SUCCESS, SIGNOUT_SUCCESS } from "./types";

import history from "../history";

// register User
export const registerUser = userData => async dispatch => {
  // const { displayName, email, password } = userData;
  // try {
  //   const { user } = await auth.createUserWithEmailAndPassword(email, password);
  //   createUserProfileDoc(user, { displayName });
  //   history.push("/");
  // } catch (error) {
  //   console.log("error registering user", error);
  // }
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

import { auth, createUserProfileDoc } from "../firebase/Firebase.utils";
import { SET_CURRENT_USER } from "./types";
import history from "../history";

// register User
export const registerUser = userData => async dispatch => {
  const { displayName, email, password } = userData;

  try {
    const { user } = await auth.createUserWithEmailAndPassword(email, password);

    createUserProfileDoc(user, { displayName });
    history.push("/");
  } catch (error) {
    console.log("error registering user", error);
  }
};

// login user with email and password
export const loginUser = userData => async dispatch => {
  const { email, password } = userData;

  try {
    await auth.signInWithEmailAndPassword(email, password);
    history.push("/");
  } catch (error) {
    console.log("error signing in user", error);
  }
};

//set logged in user
export const setCurrentUser = user => {
  return {
    type: SET_CURRENT_USER,
    payload: user
  };
};

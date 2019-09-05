import { auth, createUserProfileDoc } from "../firebase/Firebase.utils";

// register User
export const registerUser = userData => async dispatch => {
  const { displayName, email, password } = userData;

  try {
    const { user } = await auth.createUserWithEmailAndPassword(email, password);

    createUserProfileDoc(user, { displayName });
  } catch (error) {
    console.log("error registering user", error);
  }
};

// login user with email and password
export const loginUser = userData => async dispatch => {
  const { email, password } = userData;

  try {
    await auth.signInWithEmailAndPassword(email, password);
  } catch (error) {
    console.log("error signing in user", error);
  }
};

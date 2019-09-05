import { auth, createUserProfileDoc } from "../firebase/Firebase.utils";

export const registerUser = userData => async dispatch => {
  const { displayName, email, password, confirmPassword } = userData;

  try {
    const { user } = await auth.createUserWithEmailAndPassword(email, password);

    createUserProfileDoc(user, { displayName });
  } catch (error) {
    console.log("error registering user", error);
  }
};

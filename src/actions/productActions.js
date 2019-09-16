import { CREATE_PRODUCT } from "./types";
import history from "../history";

export const createProduct = productData => (
  dispatch,
  getState,
  { getFirebase, getFirestore }
) => {
  // const { name, description, imageUrl, price} = productData

  //make async call to firestore
  const firestore = getFirestore();
  firestore
    .collection("products")
    .add({ ...productData })
    .then(() => {
      dispatch({ type: CREATE_PRODUCT });
      history.push("/");
    })
    .catch(err => {
      console.log("error creating product", err);
    });
};

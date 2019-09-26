import { CREATE_PRODUCT, GET_PRODUCT } from "./types";
import history from "../history";

//Create Product
export const createProduct = productData => (
  dispatch,
  getState,
  { getFirestore }
) => {
  // const { name, description, imageUrl, price} = productData
  const authorId = getState().firebase.auth.uid;

  console.log(authorId);

  //make async call to firestore
  const firestore = getFirestore();
  firestore
    .collection("products")
    .add({ ...productData, authorId })
    .then(() => {
      dispatch({ type: CREATE_PRODUCT });
      history.push("/");
    })
    .catch(err => {
      console.log("error creating product", err);
    });
};

//get Single Product
export const getProduct = productId => (
  dispatch,
  getState,
  { getFirestore }
) => {
  const firestore = getFirestore();

  firestore
    .collection("products")
    .doc(productId)
    .get()
    .then(product => {
      if (product) {
        const productData = product.data();
        dispatch({ type: GET_PRODUCT, payload: productData });
      }
    })
    .catch(err => console.log(err));
};

//Edit or Update Product
export const editProduct = (productData, id) => (
  dispatch,
  getState,
  { getFirestore }
) => {
  const firestore = getFirestore();

  firestore
    .collection("products")
    .doc(id)
    .update({ ...productData });
};

import { ADD_ITEM_TO_CART, REMOVE_CART_ITEM, GET_CART } from "./types";

export const addToCart = cartData => dispatch => {
  dispatch({ type: ADD_ITEM_TO_CART, payload: cartData });
};

export const removeCartItem = id => dispatch => {
  dispatch({ type: REMOVE_CART_ITEM, payload: id });
};

export const getCart = () => dispatch => {
  dispatch({
    type: GET_CART
    // payload: JSON.parse(localStorage.getItem("iShopCart"))
  });
};

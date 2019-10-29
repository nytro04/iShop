import { ADD_ITEM_TO_CART, REMOVE_CART_ITEM, GET_CART } from "../actions/types";

const INITIAL_STATE = {
  cart: JSON.parse(localStorage.getItem("iShopCart")) || []
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case ADD_ITEM_TO_CART:
      let cartState = JSON.parse(localStorage.getItem("iShopCart"));
      cartState = cartState ? cartState : [];

      localStorage.setItem(
        "iShopCart",
        JSON.stringify([...cartState, action.payload])
      );
      console.log(cartState);
      return {
        ...state,
        cart: JSON.parse(localStorage.getItem("iShopCart"))
      };

    case REMOVE_CART_ITEM:
      cartState = JSON.parse(localStorage.getItem("iShopCart"));
      cartState = cartState ? cartState : [];

      localStorage.setItem(
        "iShopCart",
        JSON.stringify([
          ...cartState.filter(cartItem => cartItem.id !== action.payload)
        ])
      );
      return {
        ...state,
        cart: JSON.parse(localStorage.getItem("iShopCart"))
      };
    case GET_CART:
      return {
        ...state,
        cart: JSON.parse(localStorage.getItem("iShopCart"))
        // cart: action.payload
      };
    default:
      return state;
  }
};

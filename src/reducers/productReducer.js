import { CREATE_PRODUCT, GET_PRODUCT, GET_MACBOOKS } from "../actions/types";

const INITIAL_STATE = {};

export default (state = INITIAL_STATE, action) => {
  const { type, payload } = action;

  switch (type) {
    case CREATE_PRODUCT:
      return state;
    case GET_PRODUCT:
      return {
        ...state,
        product: payload
      };
    case GET_MACBOOKS: {
      return {
        ...state,
        product: payload
      };
    }
    default:
      return state;
  }
};

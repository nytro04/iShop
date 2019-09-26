import { CREATE_PRODUCT, GET_PRODUCT } from "../actions/types";

const INITIAL_STATE = {};

export default (state = INITIAL_STATE, action) => {
  const { type, payload } = action;

  switch (type) {
    case CREATE_PRODUCT:
      return state;
    case GET_PRODUCT:
      return {
        ...state,
        payload
      };
    default:
      return state;
  }
};

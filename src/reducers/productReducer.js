import { CREATE_PRODUCT } from "../actions/types";

const INITIAL_STATE = {
  products: [
    {
      id: "1",
      name: "iphone 6s",
      description: "cool low budget phone for all",
      imageUrl: "somehtigo cool",
      price: "1500"
    },
    {
      id: "2",
      name: "iphone 6s",
      description: "cool low budget phone for all",
      imageUrl: "somehtigo cool",
      price: "1500"
    },
    {
      id: "3",
      name: "iphone 6s",
      description: "cool low budget phone for all",
      imageUrl: "somehtigo cool",
      price: "1500"
    }
  ]
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case CREATE_PRODUCT:
      return state;
    default:
      return state;
  }
};

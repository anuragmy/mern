import * as actionTypes from "../actions/types";
import { addItemToCart } from "../Cart/utils";

const initialState = {
  hidden: false,
  items: [],
};

export const cartRducer = (state = initialState, action) => {
  const { payload } = action;
  switch (action.type) {
    case actionTypes.TOGGLECART:
      return {
        ...state,
        hidden: !state.hidden,
      };
    case actionTypes.ADD_ITEM:
      return {
        ...state,
        items: addItemToCart(state.items, payload),
      };
    default:
      return state;
  }
};

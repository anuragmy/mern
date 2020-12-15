import * as actionTypes from "../actions/types";
import {
  addItemToCart,
  removeItemFromCart,
  incQuantity,
  decQuantity,
} from "../Cart/utils";

const initialState = {
  hidden: false,
  items: [],
};

export const cartRducer = (state = initialState, action) => {
  const { payload } = action;
  const { items, hidden } = state;
  switch (action.type) {
    case actionTypes.TOGGLECART:
      return {
        ...state,
        hidden: !hidden,
      };
    case actionTypes.ADD_ITEM:
      return {
        ...state,
        items: addItemToCart(items, payload),
      };
    case actionTypes.REMOVE_ITEM:
      return {
        ...state,
        items: removeItemFromCart(items, payload),
      };
    case actionTypes.INC_QUANTITY:
      return {
        ...state,
        items: incQuantity(items, payload),
      };
    case actionTypes.DEC_QUANTITY:
      return {
        ...state,
        items: decQuantity(items, payload),
      };
    default:
      return state;
  }
};

import * as actionTypes from "../actions/types";

const catagoryError = {
  error: "",
};

export const catagoryReducer = (state = catagoryError, action) => {
  const { payload } = action;
  switch (action.type) {
    case actionTypes.ADD_ITEM_ERR:
      return {
        ...state,
        error: payload,
      };
    default:
      return state;
  }
};

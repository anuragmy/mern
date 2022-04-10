import * as actionTypes from "./actionTypes";

const initialState = {
  signedIn: false,
  user: "",
  token: "",
  authLoading: false,
  error: "",
};

export const authReducer = (state = initialState, action) => {
  const { payload } = action;

  switch (action.type) {
    case actionTypes.SIGNEDIN:
      return {
        ...state,
        token: payload.token,
        user: payload.user,
        signedIn: true,
      };
    default:
      return state;
  }
};

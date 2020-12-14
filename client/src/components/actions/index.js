import * as actionTypes from "./types";

// actions

import axios from "axios";

export const SignedIn = (data) => ({
  type: actionTypes.SIGNEDIN,
  payload: data,
});

export const SignOut = () => ({
  type: actionTypes.SIGNOUT,
});

export const SignedInError = (data) => ({
  type: actionTypes.SIGNINERROR,
  payload: data,
});

export const toggleCart = () => ({
  type: actionTypes.TOGGLECART,
});

export const addItem = (item) => ({
  type: actionTypes.ADD_ITEM,
  payload: item,
});

export const removeItem = (item) => ({
  type: actionTypes.REMOVE_ITEM,
  payload: item,
});

export const incQuantity = (item) => ({
  type: actionTypes.INC_QUANTITY,
  payload: item,
});

export const decQauntity = (item) => ({
  type: actionTypes.DEC_QUANTITY,
  payload: item,
});

// thunks

export const signIn = (email, password) => async (dispatch) => {
  await axios
    .post("http://localhost:3001/api/sign-in", {
      email: email,
      password: password,
    })
    .then((res) => {
      console.log("res", res.data);
      if (res.data && res.data.user) {
        localStorage.setItem("token", res.data.token);
        return dispatch(
          SignedIn({ user: res.data.user, token: res.data.token })
        );
      }
    })
    .catch((err) => dispatch(SignedInError(err)));
};

export const signUp = (name, email, password) => async (dispatch) => {
  await axios
    .post("http://localhost:3001/api/signup", {
      email: email,
      password: password,
      name: name,
    })
    .then((res) => {
      console.log("res", res.data);
      if (res.data && res.data.user) {
        localStorage.setItem("token", res.data.token);
        return dispatch(
          SignedIn({ user: res.data.user, token: res.data.token })
        );
      }
    })
    .catch((err) => dispatch(SignedInError(err)));
};

export const signOut = () => async (dispatch) => {
  await axios
    .get("http://localhost:3000/api/signout")
    .then((res) => {
      console.log("res", res.data);
      if (res.data) {
        localStorage.removeItem("token");
        return dispatch(
          SignedIn({ user: res.data.user, token: res.data.token })
        );
      }
    })
    .catch((err) => dispatch(SignedInError(err)));
};

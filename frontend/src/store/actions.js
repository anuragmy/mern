import * as actionTypes from "./actionTypes";

export const SignedIn = (data) => ({
  type: actionTypes.SIGNEDIN,
  payload: data,
});

export const signIn = (email, password) => async (dispatch) => {
  await axios
    .post("/api/sign-in", {
      email: email,
      password: password,
    })
    .then((res) => {
      if (res.data && res.data.user) {
        localStorage.setItem("token", res.data.token);
        return dispatch(
          SignedIn({ user: res.data.user, token: res.data.token })
        );
      }
    })
    .catch((err) => dispatch(SignedInError(err)));
};

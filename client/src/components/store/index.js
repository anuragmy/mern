import { createStore, applyMiddleware, combineReducers } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import Logger from "redux-logger";
import thunk from "redux-thunk";
import { checkSignedIn } from "../reducers/authReducers";
import { cartRducer } from "../reducers/CartReducer";

const reducers = combineReducers({
  auth: checkSignedIn,
  cart: cartRducer,
});

export const store = createStore(
  reducers,
  composeWithDevTools(applyMiddleware(Logger, thunk))
);

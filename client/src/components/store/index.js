import { createStore, applyMiddleware, combineReducers } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import Logger from "redux-logger";
import thunk from "redux-thunk";
import { checkSignedIn } from "../reducers/authReducers";

const reducers = combineReducers({
  auth: checkSignedIn,
});

export const store = createStore(
  reducers,
  composeWithDevTools(applyMiddleware(Logger, thunk))
);

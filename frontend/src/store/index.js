import { createStore, applyMiddleware, combineReducers } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import Logger from "redux-logger";
import thunk from "redux-thunk";
import { authReducer } from "./reducer";

const reducers = combineReducers({
  auth: authReducer,
});

const middlewares = [thunk];
if (process.env.NODE_ENV === "developemnt") {
  middlewares.push(Logger);
}

export const store = createStore(
  reducers,
  composeWithDevTools(applyMiddleware(...middlewares))
);

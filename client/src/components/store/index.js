/* eslint-disable import/no-anonymous-default-export */
import { createStore, applyMiddleware, combineReducers } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";
import Logger from "redux-logger";
import thunk from "redux-thunk";
import { checkSignedIn } from "../reducers/authReducers";
import { cartRducer } from "../reducers/CartReducer";
import Initial from "../reducers/initial";

const persistConfig = {
  key: "root",
  storage,
  whitelist: ["cart", "auth"],
};

const reducers = combineReducers({
  auth: checkSignedIn,
  cart: cartRducer,
  Initial,
});

const middlewares = [thunk];
if (process.env.NODE_ENV === "developemnt") {
  middlewares.push(Logger);
}

export const store = createStore(
  persistReducer(persistConfig, reducers),
  composeWithDevTools(applyMiddleware(...middlewares))
);

export const persistor = persistStore(store);

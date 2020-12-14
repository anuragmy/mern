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
  whitelist: ["cart"],
};

const reducers = combineReducers({
  auth: checkSignedIn,
  cart: cartRducer,
  Initial,
});

export const store = createStore(
  persistReducer(persistConfig, reducers),
  composeWithDevTools(applyMiddleware(Logger, thunk))
);

export const persistor = persistStore(store);

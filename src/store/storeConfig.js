import { combineReducers } from "redux";
import { configureStore } from "@reduxjs/toolkit";
import numerosReducer from "./reducers/numerosReducer";
const reducer = combineReducers({
  numeros: numerosReducer,
});

export function storeConfig() {
  return configureStore({ reducer });
}

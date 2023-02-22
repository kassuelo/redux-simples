import { combineReducers } from "redux";
import { configureStore } from "@reduxjs/toolkit";

const reducer = combineReducers({
  numeros: function (state, action) {
    console.log(state, " ", action);
    return {
      min: 1,
      max: 10,
    };
  },
  nomes: function (state, action) {
    console.log(state, " ", action);
    return ["Ana", "Bia", "Carlos"];
  },
});

export function storeConfig() {
  return configureStore({ reducer });
}

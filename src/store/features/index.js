import { combineReducers } from "@reduxjs/toolkit";

import productSlice from "./productSlice";

export const rootReducer = combineReducers({
  product: productSlice,
});

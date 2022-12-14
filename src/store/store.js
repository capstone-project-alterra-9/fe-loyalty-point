import { configureStore } from "@reduxjs/toolkit";
import productReducer from "./features/productSlice";
import userReducer from "./features/userSlice";
import redeemReducer from "./features/redeemSlice";
import buyReducer from "./features/redeemSlice";

const store = configureStore({
  reducer: {
    user: userReducer,
    product: productReducer,
    redeem: redeemReducer,
    buy: buyReducer,
  },
});
export default store;

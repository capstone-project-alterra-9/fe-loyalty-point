// import { configureStore } from "@reduxjs/toolkit";
// import productReducer from "./features/productSlice";

// const store = configureStore({
//   reducer: {
//     product: productReducer,
//   },
// });
// export default store;
import { configureStore } from "@reduxjs/toolkit";
import { rootReducer } from "./features";

const store = configureStore({
  reducer: rootReducer,
});

export default store;

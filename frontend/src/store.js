import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "./slices/cartSlice";
import ordersReducer from "./slices/ordersSlice";

const store = configureStore({
  reducer: {
    cart: cartReducer,
    orders: ordersReducer,
  },
});

export default store;

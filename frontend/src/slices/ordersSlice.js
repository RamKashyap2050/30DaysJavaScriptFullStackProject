import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  orders: [],
};
// In this ordersSlice, we're defining actions and reducers that manage order-related logic.
// The placeOrder reducer handles adding items to the Orders by updating the state with the payload (product details).
// These reducers define how the state should be updated when a specific action is dispatched.
const ordersSlice = createSlice({
  name: "orders",
  initialState,
  reducers: {
    placeOrder: (state, action) => {
      state.orders.push(...action.payload);
    },
  },
});

export const { placeOrder } = ordersSlice.actions;

export default ordersSlice.reducer;

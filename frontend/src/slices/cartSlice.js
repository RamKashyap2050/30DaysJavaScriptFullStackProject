import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  items: [],
};
// In this cartSlice, we're defining actions and reducers that manage cart-related logic.
// The addToCart reducer handles adding items to the cart by updating the state with the payload (product details).
// The clearCart reducer is responsible for emptying the cart by resetting the cart state to an empty array.
// These reducers define how the state should be updated when a specific action is dispatched.

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart: (state, action) => {
      state.items.push(action.payload);
    },
    clearCart: (state) => {
      state.items = [];
    },
  },
});

export const { addToCart, clearCart } = cartSlice.actions;

export default cartSlice.reducer;

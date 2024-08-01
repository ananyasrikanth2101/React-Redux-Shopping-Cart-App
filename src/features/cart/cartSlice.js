import { createSlice } from "@reduxjs/toolkit";

const initialState = [];

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart(state, action) {
      const item = state.find((product) => product.id === action.payload.id);
      if (item) {
        item.quantity += 1;
      } else {
        state.push({ ...action.payload, quantity: 1 });
      }
    },
    removeFromCart(state, action) {
      const item = state.find((product) => product.id === action.payload.id);
      if (item && item.quantity > 0) {
        item.quantity -= 1;
      }
    },
    removeItemFromCart(state, action) {
      return state.filter((product) => product.id !== action.payload.id);
    },
    initializeCart(state, action) {
      return action.payload.map((product) => ({ ...product, quantity: 0 }));
    },
  },
});

export const { addToCart, removeFromCart, removeItemFromCart, initializeCart } =
  cartSlice.actions;

export default cartSlice.reducer;

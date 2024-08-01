import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  products: [],
  cart: [],
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    setProducts: (state, action) => {
      state.products = action.payload;
    },
    addToCart: (state, action) => {
      const product = action.payload;
      const existingProduct = state.cart.find((item) => item.id === product.id);
      if (existingProduct) {
        existingProduct.quantity += 1;
      } else {
        state.cart.push({ ...product, quantity: 1 });
      }
    },
    removeFromCart: (state, action) => {
      const product = action.payload;
      const existingProduct = state.cart.find((item) => item.id === product.id);
      if (existingProduct && existingProduct.quantity > 0) {
        existingProduct.quantity -= 1;
        if (existingProduct.quantity === 0) {
          state.cart = state.cart.filter((item) => item.id !== product.id);
        }
      }
    },
    removeItemFromCart: (state, action) => {
      state.cart = state.cart.filter((item) => item.id !== action.payload.id);
    },
    initializeCart: (state, action) => {
      state.cart = action.payload.map((product) => ({
        ...product,
        quantity: 0,
      }));
    },
  },
});

export const {
  setProducts,
  addToCart,
  removeFromCart,
  removeItemFromCart,
  initializeCart,
} = cartSlice.actions;
export default cartSlice.reducer;

import { createSlice } from '@reduxjs/toolkit';

const cartSlice = createSlice({
  name: 'cart',
  initialState: {
    cart: [],
  },
  reducers: {
    addToCart: (state, action) => {
      const existedItem = state.cart.find(
        (item) => item.id === action.payload.id
      );
      if (existedItem) {
        existedItem.quantity += action.payload.quantity;
      } else {
        state.cart.push({
          ...action.payload,
          quantity: action.payload.quantity,
        });
      }
    },
    removeItem: (state, action) => {
      const updatedCart = state.cart.filter((item) => {
        console.log(item.id, action.payload);
        return item.id !== action.payload;
      });
      state.cart = updatedCart;
    },
  },
});

export default cartSlice.reducer;
export const { addToCart, removeItem } = cartSlice.actions;

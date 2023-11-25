import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  cartItems: [],
};

export const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addItems: (state, action) => {
      const itemIndex = state.cartItems.findIndex(
        (item) => item.id === action.payload.id
      );

      if (itemIndex >= 0) {
        state.cartItems[itemIndex].quantity++;
        state.cartItems[itemIndex].total =
          state.cartItems[itemIndex].quantity * action.payload.price;
      } else {
        const tempProduct = {
          ...action.payload,
          quantity: 1,
          total: action.payload.price,
        };
        state.cartItems.push(tempProduct);
      }
    },

    increment: (state, action) => {
      const itemIndex = state.cartItems.findIndex(
        (item) => item.id === action.payload.id
      );
      state.cartItems[itemIndex].quantity++;
      state.cartItems[itemIndex].total =
        state.cartItems[itemIndex].quantity * action.payload.price;
    },

    decrement: (state, action) => {
      const itemIndex = state.cartItems.findIndex(
        (item) => item.id === action.payload.id
      );

      if (state.cartItems[itemIndex].quantity === 1) {
        state.cartItems = state.cartItems.filter(
          (item) => item.id !== action.payload.id
        );
      } else {
        state.cartItems[itemIndex].quantity--;
        state.cartItems[itemIndex].total =
          state.cartItems[itemIndex].quantity * action.payload.price;
      }
    },

    removeItems: (state, action) => {
      state.cartItems = state.cartItems.filter(
        (item) => item.id !== action.payload.id
      );
    },
  },
});

export const cartTotalSelector = (state) => {
  return state.cart.cartItems.reduce((total, item) => {
    return total + item.total;
  }, 0); // 0 adalah nilai awal total
};

export const cartQuantitySelector = (state) => {
  return state.cart.cartItems.reduce((quantity, item) => {
    return quantity + item.quantity;
  }, 0);
};

export const { addItems, increment, decrement, removeItems } =
  cartSlice.actions;
export default cartSlice.reducer;

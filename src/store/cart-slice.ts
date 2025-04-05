import type { TProduct } from "@/utils/products";
import { createSlice, type PayloadAction } from "@reduxjs/toolkit";

type TCartState = {
  list: TProduct["id"][];
};
const initialState: TCartState = {
  list: [],
};

export const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart: (state, action: PayloadAction<TProduct["id"]>) => {
      state.list.push(action.payload);
    },
  },
});

export const { addToCart } = cartSlice.actions;

export default cartSlice.reducer;

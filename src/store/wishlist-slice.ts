import type { TProduct } from "@/utils/products";
import { createSlice, type PayloadAction } from "@reduxjs/toolkit";

type TWishlistState = {
  list: TProduct["id"][];
};

const initialState: TWishlistState = {
  list: [],
};

export const wishlistSlice = createSlice({
  name: "wishlist",
  initialState,
  reducers: {
    addToWishlist: (state, action: PayloadAction<TProduct["id"]>) => {
      state.list.push(action.payload);
    },
  },
});

export const { addToWishlist } = wishlistSlice.actions;

export default wishlistSlice.reducer;

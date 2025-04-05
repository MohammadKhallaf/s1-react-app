import type { TProduct } from "@/utils/products";
import { createSlice, type PayloadAction } from "@reduxjs/toolkit";

type TProductState = {
  list: TProduct[];
  loading: boolean;
};

const initialState: TProductState = {
  list: [],
  loading: true,
};

const productSlice = createSlice({
  name: "product",
  initialState,
  reducers: {
    setProducts: (state, action: PayloadAction<TProduct[]>) => {
      state.list = action.payload;
      state.loading = false;
    },
  },
});

export const { setProducts } = productSlice.actions;

export default productSlice.reducer;

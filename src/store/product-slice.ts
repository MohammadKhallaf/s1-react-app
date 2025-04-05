import type { TProduct, TProductAPI } from "@/utils/products";
import {
  createAsyncThunk,
  createSlice,
  type PayloadAction,
} from "@reduxjs/toolkit";
import axios from "axios";

type TProductState = {
  list: TProduct[];
  loading: boolean;
};

export const fetchProductsList = createAsyncThunk(
  "product/fetchProducts",
  async (_, thunkAPI) => {
    const response = await axios.get("https://fakestoreapi.com/products");
    const data = response.data as TProductAPI[];

    return data.map((item) => {
      return {
        id: item.id,
        name: item.title,
        description: item.description,
        price: item.price.toString(),
        category: item.category,
        image: item.image,
      };
    });
  }
);

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
  extraReducers(builder) {
    builder.addCase(fetchProductsList.fulfilled, (state, action) => {
      state.list = action.payload as TProduct[];
      state.loading = false;
    });
  },
});

export const { setProducts } = productSlice.actions;

export default productSlice.reducer;

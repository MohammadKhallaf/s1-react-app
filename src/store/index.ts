import { configureStore } from "@reduxjs/toolkit";
import productReducer from "./product-slice";
import cartReducer from "./cart-slice";
import wishlistReducer from "./wishlist-slice";
import authReducer from "./auth-slice";
export const store = configureStore({
  reducer: {
    auth: authReducer,
    product: productReducer,
    cart: cartReducer,
    wishlist: wishlistReducer,
  },
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;

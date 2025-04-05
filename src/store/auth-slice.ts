import { createSlice, type PayloadAction } from "@reduxjs/toolkit";

type TAuthState = {
  user: object;
  role: "guest" | "admin" | "user";
};

const initialState: TAuthState = {
  user: {},
  role: "guest",
};

export const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    login(state, action: PayloadAction<TAuthState>) {
      state.user = action.payload.user;
      state.role = action.payload.role;
    },
    logout(state) {
      state.user = {};
      state.role = "guest";
    },
  },
});

export const { login, logout } = authSlice.actions;
export default authSlice.reducer;

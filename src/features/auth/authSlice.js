import { createSlice } from "@reduxjs/toolkit";

const initialState = {};

export const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    login: (state, action) => {
      state = {
        id: action.payload.id,
        username: action.payload.username,
        password: action.payload.password,
        email: action.payload.email,
      };
    },
    logout: (state) => {
      state = {};
    },
  },
});

export const { login, logout } = authSlice.actions;

export default authSlice.reducer;

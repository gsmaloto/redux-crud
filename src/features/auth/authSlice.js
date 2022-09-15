import { createSlice } from "@reduxjs/toolkit";

const initialState = { id: null, username: null, password: null, email: null };

export const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    login: (state, action) => {
      return (state = {
        id: action.payload.id,
        username: action.payload.username,
        password: action.payload.password,
        email: action.payload.email,
      });
    },
    logout: (state) => {
      state = {};
    },
  },
});

export const { login, logout } = authSlice.actions;

export default authSlice.reducer;

/** @format */

import { createSlice } from "@reduxjs/toolkit";


const savedData = localStorage.getItem("Authenticated")

const authSlice = createSlice({
  name: "auth",
  initialState: {
    isAuthenticated: savedData ? true : false,
  },
  reducers: {
    Login: (state) => {
      state.isAuthenticated = true;
      localStorage.setItem("Authenticated", "Authenticated");
    },
    LOGOUT: (state) => {
      state.isAuthenticated = false;
      localStorage.clear();
    },
  },
});

export const { Login, LOGOUT } = authSlice.actions;

export const isAuthenticated = (state) => state.auth.isAuthenticated;

export default authSlice.reducer;

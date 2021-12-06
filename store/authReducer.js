import { createSlice } from "@reduxjs/toolkit";

const initialState = { isLoggedin: false, user: null }; // 초기 상태 정의

const authSlice = createSlice({
  name: "authReducer",
  initialState,
  reducers: {
    login: (state) => {},
    loginSuccess: (state, { payload }) => {
      state.isLoggedin = true;
      state.user = payload.user;
    },
    loginError: (state, { payload }) => {
      state.isLoggedin = false;
      state.user = null;
    },
    logout: (state) => {},
    logoutSuccess: (state) => {
      state.isLoggedin = false;
      state.user = null;
    },
    logoutError: (state, { payload }) => {
      state.isLoggedin = true;
    },
  },
});

export const authActions = authSlice.actions;
export const { login, logout } = authSlice.actions;
export default authSlice.reducer;

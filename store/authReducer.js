import { createSlice } from "@reduxjs/toolkit";

const initialState = { isLoggedin: false, user: null }; // 초기 상태 정의

const authSlice = createSlice({
  name: "authReducer",
  initialState,
  reducers: {
    login: (state) => {
      state.isLoggedin = true;
    },
    logout: (state) => {
      state.isLoggedin = false;
    },
  },
});

export const { login, logout } = authSlice.actions;
export default authSlice.reducer;

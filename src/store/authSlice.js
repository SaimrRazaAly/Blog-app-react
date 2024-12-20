import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  status: false,
  userDate: null,
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    login: (state, action) => {
      state.status = true;
      state.userDate = action.payload;
    },
    logout: (state) => {
      state.status = false;
      state.userDate = null;
    },
  },
});

const { login, logout } = authSlice.actions;
export default authSlice.reducer;

import { createSlice } from "@reduxjs/toolkit";

//creating new Slice for the login state

const initialAuthState = {
  isAuthenticated: false,
};

const authenticationSlice = createSlice({
  name: "authentication",
  initialState: initialAuthState,
  reducers: {
    login(state) {
      state.isAuthenticated = true;
    },
    logout(state) {
      state.isAuthenticated = false;
    },
  },
});

export const authenticationActions = authenticationSlice.actions;

export default authenticationSlice.reducer;

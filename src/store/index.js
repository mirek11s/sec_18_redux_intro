//redux logic comes here

import { configureStore } from "@reduxjs/toolkit";

//importing counterSlice.reducer as counterReducer
import counterReducer from "./counter-slice";

import authReducer from "./auth-slice";

const store = configureStore({
  reducer: {
    counter_1: counterReducer,
    auth: authReducer,
  },
});


export default store;

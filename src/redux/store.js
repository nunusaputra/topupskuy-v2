import { configureStore } from "@reduxjs/toolkit";
import topup from "./slices/topupSlice";

const store = configureStore({
  reducer: {
    topup: topup,
  },
});

export default store;

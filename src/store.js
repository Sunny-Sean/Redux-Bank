import { configureStore } from "@reduxjs/toolkit";
import accountReducer from "./tinhnang/taikhoan/AccountSlice";
import customerReducer from "./tinhnang/khachhang/CustomerSlice";

const store = configureStore({
  reducer: {
    account: accountReducer,
    customer: customerReducer,
  },
});

export default store;

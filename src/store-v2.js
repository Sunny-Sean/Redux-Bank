import { applyMiddleware, combineReducers, createStore } from "redux";
import accountReducer from "./tinhnang/taikhoan/AccountSlice";
import customerReducer from "./tinhnang/khachhang/CustomerSlice";
import thunk from "redux-thunk";

// Bộ giảm tốc gốc
const rootReduce = combineReducers({
  account: accountReducer,
  customer: customerReducer,
});

// applyMiddleware(thunk) xử lí bất đồng bộ rồi truyền tới reducer
const store = createStore(rootReduce, applyMiddleware(thunk));

export default store;

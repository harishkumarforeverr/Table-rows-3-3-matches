import { combineReducers } from "@reduxjs/toolkit";
import LoginSlice from "./Login/LoginSlice";
import productSlice from "./Products/ProductSlice";

const rootReducer = combineReducers({
  auth: LoginSlice,
  productDetails: productSlice,
});

export default rootReducer;

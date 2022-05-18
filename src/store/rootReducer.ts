import { combineReducers } from "redux";

import { productDetailSlice } from "./product"

// 用于合并多个reducer
const rootReducer = combineReducers({
    product: productDetailSlice.reducer
});

export default rootReducer;
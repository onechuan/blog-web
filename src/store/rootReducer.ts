import { combineReducers } from "redux";

import { productorDetailSlice } from "./product"

// 用于合并多个reducer
const rootReducer = combineReducers({
    product: productorDetailSlice.reducer
});

export default rootReducer;
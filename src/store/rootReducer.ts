import { combineReducers } from "redux";

import { productDetailSlice } from "./product";
import { articleSlice } from "./article"

// 用于合并多个reducer
const rootReducer = combineReducers({
    product: productDetailSlice.reducer,
    article: articleSlice.reducer
});

export default rootReducer;
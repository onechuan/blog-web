import { AnyAction, configureStore, ThunkAction, ThunkDispatch } from '@reduxjs/toolkit';

import rootReducer from './rootReducer';

const store = configureStore({
    reducer: rootReducer,
    middleware: getDefaultMiddleware => [...getDefaultMiddleware({
            serializableCheck: false
    })],
    devTools: true
});

export type RootState = ReturnType<typeof store.getState>;
export type ReduxState = ReturnType<typeof rootReducer>;
export type AppDispatch = typeof store.dispatch;
export type TypedDispatch = ThunkDispatch<ReduxState, any, AnyAction>;
export type TypedThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  ReduxState,
  unknown,
  AnyAction
>;
export default store;
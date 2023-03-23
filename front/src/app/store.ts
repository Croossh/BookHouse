import { configureStore, ThunkAction, Action } from "@reduxjs/toolkit";
import searchInputReducer from "../features/searchInput/SearchInputSlice";

export const store = configureStore({
  reducer: { searchInputReducer },
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;

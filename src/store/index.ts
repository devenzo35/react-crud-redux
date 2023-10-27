import { configureStore, PayloadAction } from "@reduxjs/toolkit";
import usersReducer from "./users/slice";

const persistanceMiddleware = (store) => (next) => (action: PayloadAction) => {
  next(action);
  localStorage.setItem(
    "__users__info__",
    JSON.stringify(store.getState().users)
  );
};

const store = configureStore({
  reducer: { users: usersReducer },
  middleware: [persistanceMiddleware],
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;

import { configureStore } from "@reduxjs/toolkit";
import usersReducer from "./users/slice";
import { useAppDispatch } from "../hooks/store";

const persistanceMiddleware = (store) => (next) => (action) => {
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

import { configureStore, PayloadAction } from "@reduxjs/toolkit";
import usersReducer, { rollbackUser } from "./users/slice";
import { toast } from "sonner";
import { userWithId } from "../types/types";

const persistanceMiddleware = (store) => (next) => (action: PayloadAction) => {
  localStorage.setItem(
    "__users__info__",
    JSON.stringify(store.getState().users)
  );
  next(action);
};

const callbackDeleteMiddleware =
  (store) => (next) => (action: PayloadAction<userWithId>) => {
    const { type, payload } = action;
    const previousState = store.getState().users;
    const removeUserId = payload.toString();

    next(action);

    if (type === "usersSlice/deleteUser") {
      const userToRemove = previousState.find(
        (user: userWithId) => user.id === removeUserId
      );
      console.log(userToRemove);
      fetch(`https://jsonplaceholder.typicode.com/users${payload}`, {
        method: "DELETE",
      })
        .then(() => {
          // if (res.ok) toast.success("you got it");
          throw new Error("que paso aca");
        })
        .catch((err) => {
          console.log(err);
          if (userToRemove) store.dispatch(rollbackUser(userToRemove));
        });
    }
  };

const store = configureStore({
  reducer: { users: usersReducer },
  middleware: [persistanceMiddleware, callbackDeleteMiddleware],
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;

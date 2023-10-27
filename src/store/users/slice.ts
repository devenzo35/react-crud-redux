import { createSlice, type PayloadAction } from "@reduxjs/toolkit";
import { User, userId, userWithId } from "../../types/types";

const initialState: userWithId[] = (function () {
  /* localStorage.setItem(
    "__users__info__",
    JSON.stringify([
      {
        id: "1",
        name: "Enzo",
        email: "enzocuellar12@gmail.com",
        github: "devenzo35",
      },
      {
        id: "2",
        name: "Julia",
        email: "Julia@gmail.com",
        github: "algo35",
      },
      {
        id: "3",
        name: "Pedro",
        email: "Pedro@gmail.com",
        github: "apalabrado",
      },
      {
        id: "4",
        name: "Juan",
        email: "Juan@gmail.com",
        github: "malditodev",
      },
    ])
  ); */
  const usersInfo = localStorage.getItem("__users__info__");

  if (usersInfo) {
    return JSON.parse(usersInfo);
  }

  return [];
})();

const usersSlice = createSlice({
  name: "usersSlice",
  initialState,
  reducers: {
    addUser: (state, action: PayloadAction<User>) => {
      const id = crypto.randomUUID();
      state.push({ id, ...action.payload });
    },
    deleteUser: (state, action: PayloadAction<userId>) => {
      const id = action.payload;
      return state.filter((user: userWithId) => user.id != id.toString());
    },

    rollbackUser: (state, action: PayloadAction<userWithId>) => {
      const user = state.some((user) => user.id === action.payload.id);
      if (!user) return [...state, action.payload];
    },
  },
});

export default usersSlice.reducer;
export const { deleteUser, addUser, rollbackUser } = usersSlice.actions;

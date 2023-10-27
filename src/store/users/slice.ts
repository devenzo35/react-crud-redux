import { createSlice, type PayloadAction } from "@reduxjs/toolkit";

export type userId = number;

interface User {
  name: string;
  email: string;
  github: string;
}

export interface userWithId extends User {
  id: userId;
}

const initialState: userWithId = (function () {
  /* localStorage.setItem(
    "__users__info__",
    JSON.stringify([
      {
        id: 1,
        name: "Enzo",
        email: "enzocuellar12@gmail.com",
        github: "devenzo35",
      },
      {
        id: 2,
        name: "Julia",
        email: "Julia@gmail.com",
        github: "algo35",
      },
      {
        id: 3,
        name: "Pedro",
        email: "Pedro@gmail.com",
        github: "apalabrado",
      },
      {
        id: 4,
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
    deleteUser: (state, action: PayloadAction<userId>) => {
      const id = action.payload;
      return state.filter((user) => user.id != id);
    },
  },
});

export default usersSlice.reducer;
export const { deleteUser } = usersSlice.actions;

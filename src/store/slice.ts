import { createSlice } from "@reduxjs/toolkit";

interface User {
  name: string;
  email: string;
  github: string;
}

export interface userWithId extends User {
  id: number;
}

const initialState: userWithId[] = [
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
];

const usersSlice = createSlice({
  name: "usersSlice",
  initialState,
  reducers: {},
});

export default usersSlice.reducer;

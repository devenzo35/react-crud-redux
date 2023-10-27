import { addUser, deleteUser } from "../store/users/slice";
import { User, userId } from "../types/types";
import { useAppDispatch } from "./store";

export const useUserActions = () => {
  const dispatch = useAppDispatch();

  const addNewUser = (userWithoutId: User) => {
    dispatch(addUser(userWithoutId));
  };

  const removeUser = (id: userId) => {
    dispatch(deleteUser(id));
  };

  return { removeUser, addNewUser };
};

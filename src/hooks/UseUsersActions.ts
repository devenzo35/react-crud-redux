import { deleteUser, userId } from "../store/users/slice";
import { useAppDispatch } from "./store";

export const useUserActions = () => {
  const dispatch = useAppDispatch();

  const removeUser = (id: userId) => {
    dispatch(deleteUser(id));
  };

  return { removeUser };
};

import { useQuery } from "@tanstack/react-query";
import { User } from "../../domain/user.model";
import { getUsers } from "../services/user.service";

export const useUsers = () => {
  const { data, isLoading, error } = useQuery<User[], Error>({
    queryKey: ["users"],
    queryFn: getUsers,
  });

  return { data, isLoading, error };
};

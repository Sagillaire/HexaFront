import { userRepository } from "../../infrastructure/repositories/user.repository";

export const getUsers = async () => {
  return await userRepository.findAll();
};

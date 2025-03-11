import { User } from "../../domain/user.model";
import { ApiService } from "../api/lambda.services";

const service = new ApiService("/users", "BASE");

export const userRepository = {
  findAll: async (): Promise<User[]> => service.findAll(),
};

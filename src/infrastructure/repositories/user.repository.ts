import { User } from "../../domain/user.model";
import { ServiceLambda } from "../api/lambda.services";

const service = new ServiceLambda("/users", "BASE");

export const userRepository = {
  findAll: async (): Promise<User[]> => service.findAll(),
};

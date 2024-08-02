import { container } from "tsyringe";
import UserService from "../services/userService";


container.registerSingleton<UserService>(UserService);
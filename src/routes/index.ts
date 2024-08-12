import { authRoutes } from "./auth";
import { errorRoutes } from "./errors";
import { publicRoutes } from "./root";
import { userRoutes } from "./user";

export const routes = [...authRoutes, ...publicRoutes, ...errorRoutes,...userRoutes];

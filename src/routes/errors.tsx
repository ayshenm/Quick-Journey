import ErrorNotFound from "@/components/errors/error-not-found";
import { RouteObject } from "react-router-dom";
import ErrorInternalServer from "@/components/errors/error-interval-server";

export const errorRoutes: RouteObject[] = [
  {
    path: "*",
    element: <ErrorNotFound />,
  },
  {
    path: "internal-server",
    element: <ErrorInternalServer />,
  },
];

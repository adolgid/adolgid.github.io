import { createHashRouter, RouterProvider } from "react-router-dom";
import routes from "./routes";

export default function MainRouter() {
  const router = createHashRouter(routes, {
    future: {
      v7_relativeSplatPath: true,
      v7_fetcherPersist: true,
      v7_normalizeFormMethod: true,
      v7_partialHydration: true,
      v7_skipActionErrorRevalidation: true,
    },
    basename: "/",
  });

  return <RouterProvider router={router} />;
}

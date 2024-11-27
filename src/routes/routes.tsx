import { RouteObject } from "react-router-dom";
import GlobalLayout from "../layout/GlobalLayout";
import Landing from "../pages/Landing";

const routes: RouteObject[] = [
  {
    path: "/",
    element: <GlobalLayout />,
    children: [{ path: "", element: <Landing /> }],
  },
];

export default routes;

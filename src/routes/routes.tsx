import { RouteObject } from "react-router-dom";
import GlobalLayout from "../layouts/GlobalLayout";
import Error from "../pages/error/Error";
import Landing from "../pages/landing/Landing";
import AboutMe from "../pages/aboutme/AboutMe";


const routes: RouteObject[] = [
  {
    path: "/",
    element: <GlobalLayout />,
    children: [
      { path: "*", element: <Error /> },
      { path: "", element: <Landing />, },
      { path: "/aboutme", element: <AboutMe />, }
    ],
  },
];

export default routes;

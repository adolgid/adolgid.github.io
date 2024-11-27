import { Outlet, useLocation } from "react-router-dom";
import "./index.css";
import { useEffect } from "react";

export default function GlobalLayout() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return (
    <div className="content">
      <Outlet />
    </div>
  );
}

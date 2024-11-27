import "./styles/index.css";
import { Outlet, useLocation } from "react-router-dom";
import Header from "./Header/Header";
import Footer from "./Footer/Footer";
import { useEffect } from "react";

export default function GlobalLayout() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return (
    <div className="global-layout min-h-screen h-full">
      <Header />
      <main id="detail" className="main pt-16 md:pt-0 min-w-full min-h-screen">
        <div className="min-w-full min-h-screen">
          <Outlet />
        </div>
      </main>
      <Footer />
    </div>
  );
}

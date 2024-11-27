import "./styles/index.css";
import { Outlet, useLocation } from "react-router-dom";
import Header from "./Header/Header";
import Loading from "../components/Loading/Loading";
import Footer from "./Footer/Footer";
import { useEffect, useState } from "react";

export default function GlobalLayout() {
  const [isLoading, setIsLoading] = useState(false);
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return (
    <div className="global-layout min-h-screen">
      <Header />
      <div>
        {isLoading ? (
          <Loading />
        ) : (
          <main id="detail" className="main pt-16 md:pt-0">
            <div className="min-w-full min-h-screen">
              <Outlet />
            </div>
          </main>
        )}
      </div>
      <Footer />
    </div>
  );
}

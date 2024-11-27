// Header nav with left logo, left menu, full width submenus toggle, right login button and all with tailwind css

import { Link } from "react-router-dom";
import { useHeaderLogic } from "./useHeaderLogic";
import Button from "../../components/Button/Button";
import Icon from "../../components/Icon/Icon";
import { motion } from "framer-motion";
import { APP_TITLE } from "../../config/const";

export default function Header() {
  const { isMenuOpen, setIsMenuOpen } = useHeaderLogic();

  return (
    <header className="relative shadow z-20 bg-zinc-100">
      <nav className="w-full fixed md:relative shadow-lg z-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 bg-zinc-100 w-full">
          <div className="flex justify-between h-16 ">
            <div className="flex">
              <Link to="/" className="flex items-center">
                <span className="ml-2 md:text-xl font-bold text-slate-600 uppercase">
                  {APP_TITLE}
                </span>
              </Link>
            </div>
            <div
              className={`uppercase hidden md:flex space-x-4 py-2 ${
                isMenuOpen ? "block" : "hidden"
              }`}
            >
              <Link
                to="/aboutme"
                className="inline-flex items-center px-1 pt-1 text-sm font-medium text-gray-600 hover:text-zinc-600"
              >
                About Me
              </Link>
            </div>
            <div className="mr-2 flex md:hidden">
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                type="button"
                className="inline-flex items-center px-1 pt-1 text-sm font-medium text-gray-600 hover:text-zinc-600"
              >
                <span className="sr-only">Open main menu</span>
                {isMenuOpen ? (
                  <Icon name="x" className="block h-6 w-6" />
                ) : (
                  <Icon name="menu" className="block h-6 w-6" />
                )}
              </button>
            </div>
            {isMenuOpen && (
              <motion.div
                initial={{ y: -100, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                className="w-full bg-zinc-200 md:hidden m-0 p-0 fixed top-16 left-0 z-20 flex flex-col items-start justify-center space-y-2 border-b border-zinc-400 shadow-lg"
              >
                <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 uppercase">
                  <Link
                    to="/aboutme"
                    onClick={() => setIsMenuOpen(false)}
                    className="block px-3 py-2 rounded-md text-base font-medium text-gray-600 hover:text-zinc-600"
                  >
                    About Me
                  </Link>
                </div>
              </motion.div>
            )}
          </div>
        </div>
      </nav>
    </header>
  );
}

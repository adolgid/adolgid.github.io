import { Link } from "react-router-dom";
import Icon from "../../components/Icon/Icon";
import { APP_TITLE } from "../../config/const";

export default function Header() {
  return (
    <header className="relative shadow z-20 bg-zinc-100">
      <nav className="w-full fixed md:relative shadow-lg z-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 bg-zinc-100 w-full">
          <div className="flex justify-between h-16 ">
            <div className="flex">
              <Link to="/" className="flex items-center">
                <span className="ml-2 text-3xl font-bold text-slate-600 uppercase font-hoves-light">
                  {APP_TITLE}
                </span>
              </Link>
            </div>
            <div className={`uppercase hidden md:flex space-x-4 py-2`}>
              <Link
                to="/aboutme"
                className="inline-flex items-center px-1 pt-1 text-sm font-medium text-gray-600 hover:text-zinc-600"
              >
                biografía
                <Icon name="bio" className="ml-2 block h-3 w-3" />
              </Link>
            </div>
            <div className="mr-2 flex md:hidden">
              <Link
                to="/aboutme"
                className="inline-flex items-center px-1 pt-1 text-sm font-medium text-gray-600 hover:text-zinc-600"
              >
                <Icon name="bio" className="block h-6 w-6" />
              </Link>
            </div>
          </div>
        </div>
      </nav>
    </header>
  );
}

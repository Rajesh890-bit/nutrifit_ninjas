// Navbar.tsx
import React from "react";
import { Link } from "react-router-dom";
const Navbar: React.FC = () => {
  return (
    <nav className="bg-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center justify-between">
            <div className="flex-shrink-0">
              <Link to="/">
                <a className="text-white font-bold text-lg">Logo</a>
              </Link>
            </div>
            <div className="hidden ">
              <div className="ml-10 flex items-baseline space-x-4">
                <Link to="/">
                  <a
                    href="#"
                    className="text-gray-300 hover:text-white px-3 py-2 rounded-md text-sm font-medium"
                  >
                    Home
                  </a>
                </Link>
                <Link to={"/exercise"}>
                  <a
                    href="#"
                    className="text-gray-300 hover:text-white px-3 py-2 rounded-md text-sm font-medium"
                  >
                    Exercise
                  </a>
                </Link>
                <Link to={"/diet"}>
                  <a
                    href="#"
                    className="text-gray-300 hover:text-white px-3 py-2 rounded-md text-sm font-medium"
                  >
                    Diet
                  </a>
                </Link>
                <Link to={"/login"}>
                  <a
                    href="#"
                    className="text-gray-300 hover:text-white px-3 py-2 rounded-md text-sm font-medium"
                  >
                    Login
                  </a>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;

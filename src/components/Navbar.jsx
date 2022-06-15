import React from "react";
import { Link } from "react-router-dom";
import Search from "./Search";

const Navbar = ({ darkTheme, setDarkTheme }) => {
  return (
    <div className="p-5 flex flex-wrap sm:justify-between justify-center border-b pb-0 items-center dark:border-gray-700 border-gray-200">
      <div className="flex justify-between items-center space-x-5 w-screen">
        <div>
          <Link to="/">
            <span className="text-4xl font-semibold text-blue-700">G</span>
            <span className="text-4xl font-semibold text-red-500">o</span>
            <span className="text-4xl font-semibold text-yellow-400">o</span>
            <span className="text-4xl font-semibold text-blue-700">g</span>
            <span className="text-4xl font-semibold text-green-600">l</span>
            <span className="text-4xl font-semibold text-red-500">e</span>
          </Link>
        </div>
        <button
          type="button"
          onClick={() => setDarkTheme(!darkTheme)}
          className="text-xl dark:bg-gray-50 dark:text-gray-900 bg-white border rounded-full px-2 py-1 hover:shadow-lg"
        >
          {darkTheme ? "☀️" : "🌙"}
        </button>
      </div>
      <Search />
    </div>
  );
};

export default Navbar;

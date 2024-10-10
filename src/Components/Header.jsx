import React from "react";
import { Link } from "react-router-dom";
export default function Header() {
  return (
    <div>
      <div className="py-5 px-5 text-white bg-teal-700 flex items-center justify-between">
        <h2>Durgesh Pawar</h2>
        <div className="flex gap-10">
          <Link
            to="/Home"
            className="text-white underline dark:md:hover:text-gray-700"
          >
            home
          </Link>
          <Link
            to="/"
            className="text-white underline dark:md:hover:text-gray-700"
          >
            ShowNews
          </Link>
          <Link
            to="/About"
            className="text-white underline dark:md:hover:text-gray-700"
          >
            about
          </Link>
          <Link
            to="/Contact"
            className="text-white underline dark:md:hover:text-gray-700"
          >
            contact
          </Link>
        </div>
      </div>
    </div>
  );
}

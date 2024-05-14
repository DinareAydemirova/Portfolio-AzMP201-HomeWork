import React from "react";
import { Link, Outlet } from "react-router-dom";
import "../../Pages/profile/Style.css";

const Header = () => {
  return (
    <div>
      <link
        rel="stylesheet"
        href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.13.0/css/all.min.css"
      />
      <link
        rel="stylesheet"
        href="https://cdnjs.cloudflare.com/ajax/libs/tailwindcss/1.4.6/tailwind.min.css"
      />
      <nav className="border-b px-4 py-2 bg-white">
        <div className="flex flex-wrap items-center justify-between md:justify-around  gap-x-4">
          {/* logo */}

          <div className="header flex  gap-x-8 ">
            <img
              className="h-10"
              src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/2a/Instagram_logo.svg/150px-Instagram_logo.svg.png"
              alt="instagram"
            />
            {/* search*/}
            <div className="relative hidden sm:block text-gray-500">
              <input
                className="search-bar max-w-xs border rounded bg-gray-200 px-4
      text-center outline-none focus:border-gray-400"
                type="search"
                placeholder="Search"
              />
              <i className="fa fa-search absolute top-0 left-0 ml-12 mt-1" />
            </div>
            <div className="space-x-4">
              <Link to="profile">Profile</Link>

              <Link to="/">Home</Link>

              <Link
                className="inline-block bg-blue-500 px-2 py-1 text-white font-semibold 
                     text-sm rounded"
                to="login"
              >
                Log In
              </Link>
              <Link
                className="inline-block text-blue-500 font-semibold text-sm"
                to="register"
              >
                Sign Up
              </Link>
           
            </div>
          </div>
        </div>
      </nav>
      <Outlet />
    </div>
  );
};

export default Header;

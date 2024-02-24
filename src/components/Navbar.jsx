import React from "react";
import Logo from "../images/Logo.jpg";
import { Link } from "react-router-dom";
import Sidebar from "./Sidebar";

const Navbar = () => {
  return (
    <>
      <div className="flex flex-col ">
        <div className="flex border space-x-10 items-center pl-2 py-2 sticky top-0 bg-[#50d71e] h-[10vh]">
          <img src={Logo} alt="IMDB" className="w-[50px] " />
          <Link to="/" className="text-blue-600 text-lg font-medium">
            Home
          </Link>
          <Link
            to="/watchlist"
            className=" text-lg font-medium hover:text-blue-600"
          >
            Watchlist
          </Link>
        </div>
        <Sidebar />
      </div>
    </>
  );
};

export default Navbar;

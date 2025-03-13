import React from "react";
import { NavLink } from "react-router";
import RouteNavbar from "./RouteNavbar.tsx";

const Navbar = () => {

  return (
    <header className="w-full h-15 flex text-xl items-center px-4 bg-[#16161D]">
      <div className="text-[#C8C093] flex-grow">@Dev-Tuhin01</div>
      <RouteNavbar />
    </header>
  )
}

export default Navbar;

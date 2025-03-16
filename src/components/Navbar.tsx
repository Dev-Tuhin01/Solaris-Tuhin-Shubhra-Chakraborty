import React from "react";
import RouteNavbar from "./RouteNavbar.tsx";

const Navbar:React.FC = () => {

  return (
    <header className="md:absolute top-0 left-0 z-40 w-full h-15 flex text-xl items-center px-4 bg-[#16161D]">
      <div className="text-[#C8C093] flex-grow">@Dev-Tuhin01</div>
      <RouteNavbar />
    </header>
  )
}

export default Navbar;

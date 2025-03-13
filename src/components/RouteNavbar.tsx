import { NavLink } from "react-router";

const RouteNavbar = () =>{
  return (
      <div className="text-[#DCD7BA] w-fit content-around">
        <NavLink to="/" className={({ isActive}) => isActive?"border-b-white px-2":"px-2"}>Home</NavLink>
        <NavLink to="/about" className={({ isActive}) => isActive?"border-b-white px-2":"px-2"}>About</NavLink>
        <NavLink to="/projects" className={({ isActive}) => isActive?"border-b-white px-2":"px-2"}>Projects</NavLink>
        <NavLink to="/contact" className={({ isActive}) => isActive?"border-b-white px-2":"px-2"}>Contact Me</NavLink>
      </div>

  )
}

export default RouteNavbar;

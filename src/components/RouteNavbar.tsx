
import { NavLink } from "react-router"; // Make sure you're using react-router-dom
import React, { useState } from "react";
import { CloseTwoTone, MenuTwoTone } from "@mui/icons-material";
import { motion } from "framer-motion"; // Importing framer-motion

const RouteNavbar: React.FC = () => {
  const [hamburgerMenu, setHamburgerMenu] = useState(false); // State to toggle menu

  const toggleMenu = () => {
    setHamburgerMenu(!hamburgerMenu); // Toggle hamburger menu state
  };

  return (
    <>
      {/* Animated Desktop Navigation */}
      <div className="text-[#DCD7BA] hidden md:flex w-fit content-around">
        <motion.div
          className="flex space-x-4"
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
        >
          <NavLink
            to="/"
            className={({ isActive }) =>
              isActive ? "border-b-white px-2" : "px-2"
            }
          >
            <motion.span
              whileHover={{ scale: 1.1 }} // Hover scale effect
              whileTap={{ scale: 0.95 }} // Click scale effect
              transition={{ type: "spring", stiffness: 300 }}
            >
              Home
            </motion.span>
          </NavLink>
          <NavLink
            to="/about"
            className={({ isActive }) =>
              isActive ? "border-b-white px-2" : "px-2"
            }
          >
            <motion.span
              whileHover={{ scale: 1.1 }} // Hover scale effect
              whileTap={{ scale: 0.95 }} // Click scale effect
              transition={{ type: "spring", stiffness: 300 }}
            >
              About
            </motion.span>
          </NavLink>
          <NavLink
            to="/projects"
            className={({ isActive }) =>
              isActive ? "border-b-white px-2" : "px-2"
            }
          >
            <motion.span
              whileHover={{ scale: 1.1 }} // Hover scale effect
              whileTap={{ scale: 0.95 }} // Click scale effect
              transition={{ type: "spring", stiffness: 300 }}
            >
              Projects
            </motion.span>
          </NavLink>
          <NavLink
            to="/contact"
            className={({ isActive }) =>
              isActive ? "border-b-white px-2" : "px-2"
            }
          >
            <motion.span
              whileHover={{ scale: 1.1 }} // Hover scale effect
              whileTap={{ scale: 0.95 }} // Click scale effect
              transition={{ type: "spring", stiffness: 300 }}
            >
              Contact Me
            </motion.span>
          </NavLink>
        </motion.div>
      </div>

      {/* Mobile Navigation */}
      <div className="flex md:hidden text-white">
        {/* Menu toggle icon */}
        {hamburgerMenu ? (
          <CloseTwoTone onClick={toggleMenu} /> // Show Close icon
        ) : (
          <MenuTwoTone onClick={toggleMenu} /> // Show Menu icon
        )}
      </div>

      {/* Animated Mobile Menu */}
      {hamburgerMenu && (
        <motion.div
          className="fixed top-[60px] right-0 w-[250px] bg-[#1A1A1A] p-5 z-10"
          initial={{ opacity: 0, x: '100%' }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: '100%' }}
          transition={{ duration: 0.3 }}
        >
          <NavLink
            to="/"
            className={({ isActive }) =>
              isActive ? "block text-white py-2 px-4 border-b-white" : "block text-white py-2 px-4"
            }
            onClick={toggleMenu} // Close menu when clicked
          >
            <motion.span
              whileHover={{ scale: 1.1 }} // Hover scale effect
              whileTap={{ scale: 0.95 }} // Click scale effect
              transition={{ type: "spring", stiffness: 300 }}
            >
              Home
            </motion.span>
          </NavLink>
          <NavLink
            to="/about"
            className={({ isActive }) =>
              isActive ? "block text-white py-2 px-4 border-b-white" : "block text-white py-2 px-4"
            }
            onClick={toggleMenu} // Close menu when clicked
          >
            <motion.span
              whileHover={{ scale: 1.1 }} // Hover scale effect
              whileTap={{ scale: 0.95 }} // Click scale effect
              transition={{ type: "spring", stiffness: 300 }}
            >
              About
            </motion.span>
          </NavLink>
          <NavLink
            to="/projects"
            className={({ isActive }) =>
              isActive ? "block text-white py-2 px-4 border-b-white" : "block text-white py-2 px-4"
            }
            onClick={toggleMenu} // Close menu when clicked
          >
            <motion.span
              whileHover={{ scale: 1.1 }} // Hover scale effect
              whileTap={{ scale: 0.95 }} // Click scale effect
              transition={{ type: "spring", stiffness: 300 }}
            >
              Projects
            </motion.span>
          </NavLink>
          <NavLink
            to="/contact"
            className={({ isActive }) =>
              isActive ? "block text-white py-2 px-4 border-b-white" : "block text-white py-2 px-4"
            }
            onClick={toggleMenu} // Close menu when clicked
          >
            <motion.span
              whileHover={{ scale: 1.1 }} // Hover scale effect
              whileTap={{ scale: 0.95 }} // Click scale effect
              transition={{ type: "spring", stiffness: 300 }}
            >
              Contact Me
            </motion.span>
          </NavLink>
        </motion.div>
      )}
    </>
  );
};

export default RouteNavbar;


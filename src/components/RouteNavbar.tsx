import { NavLink } from "react-router"; // Corrected import
import React, { useState } from "react";
import { CloseTwoTone, MenuTwoTone } from "@mui/icons-material";
import { AnimatePresence, motion } from "framer-motion"; // Importing framer-motion

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
          <NavLink to="/" className="px-2">
            <motion.span
              whileHover={{ scale: 1.1, borderBottom: "2px solid white" }} // Hover scale and border effect
              whileTap={{ scale: 0.95 }} // Click scale effect
              transition={{ type: "spring", stiffness: 200 }}
              style={{ display: 'inline-block' }} // Ensure span is inline-block for animations to work smoothly
            >
              Home
            </motion.span>
          </NavLink>
          <NavLink
            to="/skills"
            className={({ isActive }) => (isActive ? "border-b-white px-2" : "px-2")}
          >
            <motion.span
              whileHover={{ scale: 1.1, borderBottom: "2px solid white" }} // Hover scale and border effect
              whileTap={{ scale: 0.95 }} // Click scale effect
              transition={{ type: "spring", stiffness: 300 }}
              style={{ display: 'inline-block' }} // Ensure span is inline-block for animations to work smoothly
            >
              Skills
            </motion.span>
          </NavLink>
          <NavLink
            to="/projects"
            className={({ isActive }) => (isActive ? "border-b-white px-2" : "px-2")}
          >
            <motion.span
              whileHover={{ scale: 1.1, borderBottom: "2px solid white" }} // Hover scale and border effect
              whileTap={{ scale: 0.95 }} // Click scale effect
              transition={{ type: "spring", stiffness: 300 }}
              style={{ display: 'inline-block' }} // Ensure span is inline-block for animations to work smoothly
            >
              Projects
            </motion.span>
          </NavLink>
          <NavLink
            to="/contact"
            className={({ isActive }) => (isActive ? "border-b-white px-2" : "px-2")}
          >
            <motion.span
              whileHover={{ scale: 1.1, borderBottom: "2px solid white" }} // Hover scale and border effect
              whileTap={{ scale: 0.95 }} // Click scale effect
              transition={{ type: "spring", stiffness: 300 }}
              style={{ display: 'inline-block' }} // Ensure span is inline-block for animations to work smoothly
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
          <CloseTwoTone onClick={toggleMenu} aria-label="Close menu" />
        ) : (
          <MenuTwoTone onClick={toggleMenu} aria-label="Open menu" />
        )}
      </div>

      {/* Animated Mobile Menu */}
      <AnimatePresence>

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
                whileHover={{ scale: 1.1, borderBottom: "2px solid white" }} // Hover scale and border effect
                whileTap={{ scale: 0.95 }} // Click scale effect
                transition={{ type: "spring", stiffness: 300 }}
                style={{ display: 'inline-block' }} // Ensure span is inline-block for animations to work smoothly
              >
                Home
              </motion.span>
            </NavLink>
            <NavLink
              to="/skills"
              className={({ isActive }) =>
                isActive ? "block text-white py-2 px-4 border-b-white" : "block text-white py-2 px-4"
              }
              onClick={toggleMenu} // Close menu when clicked
            >
              <motion.span
                whileHover={{ scale: 1.1, borderBottom: "2px solid white" }} // Hover scale and border effect
                whileTap={{ scale: 0.95 }} // Click scale effect
                transition={{ type: "spring", stiffness: 300 }}
                style={{ display: 'inline-block' }} // Ensure span is inline-block for animations to work smoothly
              >
                Skills
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
                whileHover={{ scale: 1.1, borderBottom: "2px solid white" }} // Hover scale and border effect
                whileTap={{ scale: 0.95 }} // Click scale effect
                transition={{ type: "spring", stiffness: 300 }}
                style={{ display: 'inline-block' }} // Ensure span is inline-block for animations to work smoothly
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
                whileHover={{ scale: 1.1, borderBottom: "2px solid white" }} // Hover scale and border effect
                whileTap={{ scale: 0.95 }} // Click scale effect
                transition={{ type: "spring", stiffness: 300 }}
                style={{ display: 'inline-block' }} // Ensure span is inline-block for animations to work smoothly
              >
                Contact Me
              </motion.span>
            </NavLink>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default RouteNavbar;


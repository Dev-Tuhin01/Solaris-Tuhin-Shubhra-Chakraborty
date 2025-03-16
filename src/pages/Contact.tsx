
import React from "react";
import { Email, Telegram } from "@mui/icons-material";
import { motion } from "framer-motion"; // Import framer-motion

const Contact: React.FC = () => {
  return (
    <div className="h-screen bg-[#252535] flex flex-col justify-center items-center">
      {/* Animated Heading */}
      <motion.h1
        className="text-3xl md:text-6xl text-[#658594]"
        initial={{ opacity: 0, y: -50 }} // Initial position and opacity
        animate={{ opacity: 1, y: 0 }} // Animate to full opacity and y=0
        transition={{ duration: 0.8 }} // Animation duration
      >
        Contact Me on...
      </motion.h1>

      {/* Animated Buttons */}
      <div className="flex justify-evenly w-72 m-4">
        {/* Email Button with Animation */}
        <motion.a
          href="mailto:tuhinshubhrachakraborty2002@gmail.com"
          className="h-fit w-max p-2 bg-[#C34043] rounded-xl flex items-center justify-center"
          whileHover={{ scale: 1.1 }} // Scale up on hover
          whileTap={{ scale: 0.95 }} // Scale down on click
          initial={{ opacity: 0, x: -50 }} // Initial position and opacity
          animate={{ opacity: 1, x: 0 }} // Animate to full opacity and x=0
          transition={{ duration: 0.4, delay: 0.1, type: "spring", stiffness: 300 }} // Combined transition properties
        >
          <Email className="mr-2" /> Email
        </motion.a>

        {/* Telegram Button with Animation */}
        <motion.a
          href="https://web.telegram.org/k/#@Axion009"
          className="h-fit w-max p-2 bg-[#76946A] rounded-xl flex items-center justify-center"
          whileHover={{ scale: 1.1 }} // Scale up on hover
          whileTap={{ scale: 0.95 }} // Scale down on click
          initial={{ opacity: 0, x: 50 }} // Initial position and opacity
          animate={{ opacity: 1, x: 0 }} // Animate to full opacity and x=0
          transition={{ duration: 0.4, delay: 0.1, type: "spring", stiffness: 300 }} // Combined transition properties
        >
          <Telegram className="mr-2" /> Telegram
        </motion.a>
      </div>
    </div>
  );
};

export default Contact;



import React from "react";
import { GitHub, Instagram, LinkedIn, Twitter } from "@mui/icons-material";
import { motion } from "framer-motion"; // Import motion from framer-motion
import color from "./../assets/color.jpg";
import image from "./../assets/transperent.png";

const Home: React.FC = () => {
  return (
    <div className="flex flex-col-reverse md:flex-row h-screen bg-[#1F1F28]">
      {/* Left content */}
      <motion.div
        className="h-full md:w-1/2 flex flex-col px-5 pt-5 md:justify-center"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        <motion.div
          className="text-2xl text-[#957FB8] md:text-3xl"
          initial={{ x: -100, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 1, delay: 0.2 }}
        >
          Hi
        </motion.div>

        <motion.div
          className="text-5xl text-[#7E9CD8] md:text-6xl"
          initial={{ x: -100, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 1, delay: 0.4 }}
        >
          I'm Tuhin Shubra Chakraborty
        </motion.div>

        <motion.div
          className="text-xl text-[#717C7C] md:text-2xl"
          initial={{ x: -100, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 1, delay: 0.6 }}
        >
          @Dev-Tuhin01
        </motion.div>

        <motion.div
          className="text-pretty pt-5 text-lg text-[#7E9CD8] md:text-xl"
          initial={{ x: -100, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 1, delay: 0.8 }}
        >
          I’m a <span className="text-[#FFA066]">Full Stack Developer </span> from
          West Bengal, India. I am currently pursuing my MCA at Maulana Abul Kalam
          University of Technology, WB (MAKAUT). I have experience working with the
          MERN stack, PostgreSQL, and TypeScript. I specialize in building both
          front-end and back-end applications. This portfolio highlights my work, and I’m
          actively looking for job opportunities in software development.
        </motion.div>

        <motion.div
          className="w-full flex justify-evenly items-center text-white py-4 text-xl md:text-2xl"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1 }}
        >
          <motion.a
            href="https://github.com/Dev-Tuhin01"
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ duration: 0.5, delay: 1.2 }}
          >
            <GitHub />
          </motion.a>
          <motion.a
            href="https://www.linkedin.com/in/tuhin-shubhra-chakraborty-268b0a1b9/"
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ duration: 0.5, delay: 1.4 }}
          >
            <LinkedIn />
          </motion.a>
          <motion.a
            href="https://www.instagram.com/dev_tuhin01?igsh=MXFvZXJ4MWtreTZjdQ=="
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ duration: 0.5, delay: 1.6 }}
          >
            <Instagram />
          </motion.a>
          <motion.a
            href="https://x.com/DevTuhin01?t=D9rzRBZ_Kb0Dog2MPyU_0w&s=09"
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ duration: 0.5, delay: 1.8 }}
          >
            <Twitter />
          </motion.a>
        </motion.div>
      </motion.div>

      {/* Right side circle and image */}
      <div className="h-full w-full md:w-1/2 flex items-center justify-center relative">
        {/* Circle with color image */}
        <motion.div
          className="aspect-square w-80 h-80 md:w-144 md:h-144 bg-cover bg-center rounded-full"
          style={{ backgroundImage: `url(${color})` }}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1 }}
        ></motion.div>

        {/* Image below the circle */}
        <motion.div
          className="absolute bottom-2 md:bottom-40 w-64 h-64 md:w-122 md:h-122 bg-no-repeat bg-contain bg-center"
          style={{ backgroundImage: `url(${image})` }}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1.5, delay: 1 }}
        ></motion.div>
      </div>
    </div>
  );
};

export default Home;


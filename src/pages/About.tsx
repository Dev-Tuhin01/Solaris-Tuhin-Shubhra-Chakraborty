
import React from "react";
import Heading from "../components/Heading.tsx";
import { 
  SiCss3, SiDocker, SiExpress, SiFirebase, SiGit, SiGithub, SiHtml5, SiJavascript, SiJsonwebtokens, 
  SiKubernetes, SiLinux, SiMongodb, SiMysql, SiNeovim, SiNginx, SiNodedotjs, SiPostgresql, SiReact, 
  SiSocketdotio, SiTailwindcss, SiTypescript, SiVercel 
} from "@icons-pack/react-simple-icons";
import { motion } from "framer-motion";

// Tooltip Component
type TooltipProps = {
  text: string;
};

const Tooltip: React.FC<TooltipProps> = ({ text }) => (
  <motion.div
    className="absolute bg-[#223249] w-fit text-[#C0A36E] text-sm z-1000 rounded p-2 opacity-0 whitespace-nowrap"
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    transition={{ duration: 0.1 }}
  >
    {text}
  </motion.div>
);

const Skills: React.FC = () => {
  return (
    <div className="h-full bg-[#2A2A37] flex flex-col justify-center md:pt-20 pb-8 px-4 text-white">

      {/* Frontend Section */}
      <motion.div 
        initial={{ opacity: 0 }} 
        animate={{ opacity: 1 }} 
        transition={{ duration: 1 }}
      >
        <Heading>Frontend</Heading>
      </motion.div>

      <motion.div 
        className="flex flex-wrap justify-center py-8 font-2xl md:font-5xl gap-8 relative"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 0.2 }}
      >
        <div className="flex flex-col items-center text-xl md:text-2xl relative group">
          <SiReact color="#61DBFB" size={64} className="mb-2"/>
          <span className="text-[#61DBFB]">React</span>
          <div className="absolute opacity-0 group-hover:opacity-100 transition-opacity duration-300">
            <Tooltip text="A JavaScript library for building user interfaces" />
          </div>
        </div>
        <div className="flex flex-col items-center text-xl md:text-2xl relative group">
          <SiTailwindcss color="#06b6d4" size={64} className="mb-2"/>
          <span className="text-[#06b6d4]">Tailwind</span>
          <div className="absolute opacity-0 group-hover:opacity-100 transition-opacity duration-300">
            <Tooltip text="A utility-first CSS framework for rapid UI development" />
          </div>
        </div>
        <div className="flex flex-col items-center text-xl md:text-2xl relative group">
          <SiHtml5 color="#E44D26" size={64} className="mb-2"/>
          <span className="text-[#E44D26]">HTML</span>
          <div className="absolute opacity-0 group-hover:opacity-100 transition-opacity duration-300">
            <Tooltip text="The standard markup language for documents designed to be displayed in a web browser" />
          </div>
        </div>
        <div className="flex flex-col items-center text-xl md:text-2xl relative group">
          <SiCss3 color="#0f5298" size={64} className="mb-2"/>
          <span className="text-[#0f5298]">CSS</span>
          <div className="absolute opacity-0 group-hover:opacity-100 transition-opacity duration-300">
            <Tooltip text="A style sheet language used for describing the presentation of a document written in HTML" />
          </div>
        </div>
        <div className="flex flex-col items-center text-xl md:text-2xl relative group">
          <SiJavascript color="#f0db4f" size={64} className="mb-2"/>
          <span className="text-[#f0db4f]">Javascript</span>
          <div className="absolute opacity-0 group-hover:opacity-100 transition-opacity duration-300">
            <Tooltip text="A high-level, interpreted programming language used for web development" />
          </div>
        </div>
        <div className="flex flex-col items-center text-xl md:text-2xl relative group">
          <SiTypescript color="#3178c6" size={64} className="mb-2"/>
          <span className="text-[#3178c6]">Typescript</span>
          <div className="absolute opacity-0 group-hover:opacity-100 transition-opacity duration-300">
            <Tooltip text="A typed superset of JavaScript that compiles to plain JavaScript" />
          </div>
        </div>
      </motion.div>

      {/* Backend Section */}
      <motion.div 
        initial={{ opacity: 0 }} 
        animate={{ opacity: 1 }} 
        transition={{ duration: 1, delay: 0.5 }}
      >
        <Heading>Backend</Heading>
      </motion.div>

      <motion.div 
        className="flex flex-wrap justify-center py-8 font-2xl md:font-5xl gap-8 relative"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 0.7 }}
      >
        <div className="flex flex-col items-center text-xl md:text-2xl relative group">
          <SiNodedotjs color="#3c873a" size={64} className="mb-2"/>
          <span className="text-[#3c873a]">Node.JS</span>
          <div className="absolute opacity-0 group-hover:opacity-100 transition-opacity duration-300">
            <Tooltip text="A JavaScript runtime built on Chrome's V8 JavaScript engine" />
          </div>
        </div>
        <div className="flex flex-col items-center text-xl md:text-2xl relative group">
          <SiExpress color="#68A063" size={64} className="mb-2"/>
          <span className="text-[#68A063]">ExpressJS</span>
          <div className="absolute opacity-0 group-hover:opacity-100 transition-opacity duration-300">
            <Tooltip text="A minimal and flexible Node.js web application framework" />
          </div>
        </div>
        <div className="flex flex-col items-center text-xl md:text-2xl relative group">
          <SiJsonwebtokens color="white" size={64} className="mb-2"/>
          <span className="text-white">JWT</span>
          <div className="absolute opacity-0 group-hover:opacity-100 transition-opacity duration-300">
            <Tooltip text="JSON Web Token, an open standard for securely transmitting information between parties" />
          </div>
        </div>
        <div className="flex flex-col items-center text-xl md:text-2xl relative group">
          <SiNginx color="#009900" size={64} className="mb-2"/>
          <span className="text-[#009900]">Nginx</span>
          <div className="absolute opacity-0 group-hover:opacity-100 transition-opacity duration-300">
            <Tooltip text="A web server and reverse proxy server for HTTP and other protocols" />
          </div>
        </div>
        <div className="flex flex-col items-center text-xl md:text-2xl relative group">
          <SiSocketdotio color="black" size={64} className="mb-2"/>
          <span className="text-black">SocketIo</span>
          <div className="absolute opacity-0 group-hover:opacity-100 transition-opacity duration-300">
            <Tooltip text="A library for real-time web socket communication" />
          </div>
        </div>
      </motion.div>

      {/* DevOps Section */}
      <motion.div 
        initial={{ opacity: 0 }} 
        animate={{ opacity: 1 }} 
        transition={{ duration: 1, delay: 1 }}
      >
        <Heading>DevOps</Heading>
      </motion.div>

      <motion.div 
        className="flex flex-wrap justify-center py-8 font-2xl md:font-5xl gap-8 relative"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 1.2 }}
      >
        <div className="flex flex-col items-center text-xl md:text-2xl relative group">
          <SiGit color="#f1502f" size={64} className="mb-2"/>
          <span className="text-[#f1502f]">Git</span>
          <div className="absolute opacity-0 group-hover:opacity-100 transition-opacity duration-300">
            <Tooltip text="A distributed version control system to track changes in code" />
          </div>
        </div>
        <div className="flex flex-col items-center text-xl md:text-2xl relative group">
          <SiGithub color="#ffffff" size={64} className="mb-2"/>
          <span className="text-white">Github</span>
          <div className="absolute opacity-0 group-hover:opacity-100 transition-opacity duration-300">
            <Tooltip text="A web-based platform for version control using Git" />
          </div>
        </div>
        <div className="flex flex-col items-center text-xl md:text-2xl relative group">
          <SiDocker color="#039BC6" size={64} className="mb-2"/>
          <span className="text-[#039BC6]">Docker</span>
          <div className="absolute opacity-0 group-hover:opacity-100 transition-opacity duration-300">
            <Tooltip text="A platform to develop, ship, and run applications inside containers" />
          </div>
        </div>
        <div className="flex flex-col items-center text-xl md:text-2xl relative group">
          <SiKubernetes color="#88AAF0" size={64} className="mb-2"/>
          <span className="text-[#88AAF0]">Kubernetes</span>
          <div className="absolute opacity-0 group-hover:opacity-100 transition-opacity duration-300">
            <Tooltip text="An open-source system for automating deployment, scaling, and management of containerized applications" />
          </div>
        </div>
      </motion.div>

      {/* Databases Section */}
      <motion.div 
        initial={{ opacity: 0 }} 
        animate={{ opacity: 1 }} 
        transition={{ duration: 1, delay: 1.5 }}
      >
        <Heading>Databases</Heading>
      </motion.div>

      <motion.div 
        className="flex flex-wrap justify-center py-8 font-2xl md:font-5xl gap-8 relative"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 1.7 }}
      >
        <div className="flex flex-col items-center text-xl md:text-2xl relative group">
          <SiMongodb color="#4db33d" size={64} className="mb-2"/>
          <span className="text-[#4db33d]">MongoDB</span>
          <div className="absolute opacity-0 group-hover:opacity-100 transition-opacity duration-300">
            <Tooltip text="A document-oriented NoSQL database" />
          </div>
        </div>
        <div className="flex flex-col items-center text-xl md:text-2xl relative group">
          <SiPostgresql color="#336791" size={64} className="mb-2"/>
          <span className="text-[#336791]">PostgreSQL</span>
          <div className="absolute opacity-0 group-hover:opacity-100 transition-opacity duration-300">
            <Tooltip text="An open-source relational database management system" />
          </div>
        </div>
        <div className="flex flex-col items-center text-xl md:text-2xl relative group">
          <SiMysql color="#f29111" size={64} className="mb-2"/>
          <span className="text-[#f29111]">MySQL</span>
          <div className="absolute opacity-0 group-hover:opacity-100 transition-opacity duration-300">
            <Tooltip text="An open-source relational database management system" />
          </div>
        </div>
      </motion.div>

      {/* Tools Section */}
      <motion.div 
        initial={{ opacity: 0 }} 
        animate={{ opacity: 1 }} 
        transition={{ duration: 1, delay: 2 }}
      >
        <Heading>Tools</Heading>
      </motion.div>

      <motion.div 
        className="flex flex-wrap justify-center py-8 font-2xl md:font-5xl gap-8 relative"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 2.2 }}
      >
        <div className="flex flex-col items-center text-xl md:text-2xl relative group">
          <SiNeovim color="#69A33E" size={64} className="mb-2"/>
          <span className="text-[#69A33E]">Neovim</span>
          <div className="absolute opacity-0 group-hover:opacity-100 transition-opacity duration-300">
            <Tooltip text="A modern text editor based on Vim" />
          </div>
        </div>
        <div className="flex flex-col items-center text-xl md:text-2xl relative group">
          <SiLinux color="#F4D82B" size={64} className="mb-2"/>
          <span className="text-[#F4D82B]">Linux</span>
          <div className="absolute opacity-0 group-hover:opacity-100 transition-opacity duration-300">
            <Tooltip text="An open-source Unix-like operating system" />
          </div>
        </div>
        <div className="flex flex-col items-center text-xl md:text-2xl relative group">
          <SiVercel color="black" size={64} className="mb-2"/>
          <span className="text-black">Vercel</span>
          <div className="absolute opacity-0 group-hover:opacity-100 transition-opacity duration-300">
            <Tooltip text="A platform for deploying static websites and serverless functions" />
          </div>
        </div>
        <div className="flex flex-col items-center text-xl md:text-2xl relative group">
          <SiFirebase color="#F6820C" size={64} className="mb-2"/>
          <span className="text-[#F6820C]">Firebase</span>
          <div className="absolute opacity-0 group-hover:opacity-100 transition-opacity duration-300">
            <Tooltip text="A platform for creating mobile and web applications" />
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default Skills;


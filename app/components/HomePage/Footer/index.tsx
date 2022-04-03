import { motion } from "framer-motion";
import { AiFillGithub } from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";

export const Footer = () => {
  return (
    <div className="relative w-screen min-h-screen flex items-center px-48">
      <h2 className="absolute top-40 text-[1.75rem] flex items-center">
        Let's work together!{" "}
        <span>
          <AiFillGithub className="ml-6" />
        </span>
        <span>
          <FaLinkedinIn className="ml-6" />
        </span>
      </h2>
      <motion.div className="relative">
        <a
          href="mailto:adrianfrackowiak@icloud.com"
          className="font-bold text-[8rem] leading-none"
        >
          adrianfrackowiak
          <br />
          @icloud.com
        </a>
      </motion.div>
      <footer className="absolute bottom-0 left-0 w-full px-48 h-16 flex justify-between items-center">
        <p>2022 &copy; adrianfrackowiak.com</p>
        <ul className="flex items-center space-x-12">
          <li>Github</li>
          <li>LinkedIn</li>
        </ul>
      </footer>
    </div>
  );
};

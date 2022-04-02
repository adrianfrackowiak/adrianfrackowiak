import { AiFillGithub } from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";

export const Footer = () => {
  return (
    <div className="relative w-screen min-h-screen flex items-center px-48">
      <h2 className="absolute top-40 text-[1.75rem] left-20 flex items-center">
        Let's work together!{" "}
        <span>
          <AiFillGithub className="ml-6" />
        </span>
        <span>
          <FaLinkedinIn className="ml-6" />
        </span>
      </h2>
      <a
        href="mailto:adrianfrackowiak@icloud.com"
        className="font-bold text-[8rem] leading-none"
      >
        adrianfrackowiak
        <br />
        @icloud.com
      </a>
      <footer className="absolute bottom-0 w-full h-16 flex items-center">
        <p>2022 &copy; adrianfrackowiak.com</p>
      </footer>
    </div>
  );
};

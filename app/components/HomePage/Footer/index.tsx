import { AiFillGithub } from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";

export const Footer = () => {
  return (
    <div className="relative w-screen min-h-screen flex items-center px-48">
      <div className="h-screen flex flex-col justify-center ">
        <h2 className="text-[1.75rem] flex items-center mb-10">
          Let's work together!{" "}
          <span>
            <a href="https://github.com/adrianfrackowiak/" target="_blank">
              <AiFillGithub className="ml-6" />
            </a>
          </span>
          <span>
            <a
              href="https://www.linkedin.com/in/adrianfrackowiak/"
              target="_blank"
            >
              <FaLinkedinIn className="ml-6" />
            </a>
          </span>
        </h2>
        <a
          href="mailto:adrianfrackowiak@icloud.com"
          className="font-extrabold text-[6rem] leading-none hover:text-blue-700 transition-all"
        >
          adrianfrackowiak@icloud.com
        </a>
      </div>

      <footer className="absolute bottom-0 left-0 w-full px-48 h-16 flex justify-between items-center">
        <p>
          2022 &copy;{" "}
          <a
            className="hover:text-blue-700 transition-all"
            href="https://adrianfrackowiak.com/"
          >
            adrianfrackowiak.com
          </a>
        </p>
        <ul className="flex items-center space-x-12">
          <li className="hover:text-blue-700 transition-all">
            <a href="https://github.com/adrianfrackowiak/" target="_blank">
              Github
            </a>
          </li>
          <li className="hover:text-blue-700 transition-all">
            <a
              href="https://www.linkedin.com/in/adrianfrackowiak/"
              target="_blank"
            >
              LinkedIn
            </a>
          </li>
        </ul>
      </footer>
    </div>
  );
};

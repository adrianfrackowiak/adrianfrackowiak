import { AiFillGithub } from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";

export const Footer = () => {
  return (
    <div className="relative w-screen min-h-screen flex items-center px-4 xl:px-20">
      <div className="h-screen flex flex-col justify-center px-4">
        <h2 className="text-[1rem] lg:text-[1.75rem] flex items-center mb-10">
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
          className="font-extrabold text-[2rem] lg:text-[6rem] leading-none hover:text-blue-700 transition-all break-all"
        >
          adrianfrackowiak@icloud.com
        </a>
      </div>

      <footer className="absolute text-[0.8125rem] lg:text-[1rem] text-center bottom-0 left-0 w-full px-8 xl:px-20 h-16 space-y-4 lg:space-y-0 flex flex-col md:flex-row justify-center md:justify-between items-center">
        <p>
          2022 &copy;{" "}
          <a
            className="hover:text-blue-700 transition-all"
            href="https://adrianfrackowiak.com/"
          >
            adrianfrackowiak.com
          </a>
        </p>
        <ul className="flex items-center justify-center md:justify-start space-x-12">
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

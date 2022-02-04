import { Link } from "remix";
import { IoMdPin, IoLogoGithub, IoLogoLinkedin } from "react-icons/io";

export const Header = () => {
  return (
    <header className="w-full flex flex-col items py-12">
      <Link to="/" className="mb-8">
        <h2 className="font-bold text-2xl font-merriweather leading-none">
          Adrian Frąckowiak <br />{" "}
          <span className="text-base font-sans font-normal">
            software engineer . frontend developer
          </span>
        </h2>
      </Link>
      <div>
        <ul className="space-y-2 text-sm text-gray-400">
          <li className="flex items-center">
            <IoMdPin className="text-[#4934eb] text-lg mr-2" /> Poland
          </li>

          <li>
            <a
              href="https://github.com/adrianfrackowiak/"
              target="_blank"
              className="flex items-center hover:text-[#4934eb]"
            >
              <IoLogoGithub className="text-[#4934eb] text-lg mr-2" />{" "}
              https://github.com/adrianfrackowiak/
            </a>
          </li>

          <li>
            <a
              href="https://www.linkedin.com/in/adrianfrackowiak/"
              target="_blank"
              className="flex items-center hover:text-[#4934eb]"
            >
              <IoLogoLinkedin className="text-[#4934eb] text-lg mr-2" />{" "}
              https://www.linkedin.com/in/adrianfrackowiak/
            </a>
          </li>
        </ul>
      </div>
    </header>
  );
};

import { motion } from "framer-motion";
import { useState } from "react";

export const Header = () => {
  const [isHoverHamburgerMenu, setIsHoverHamburgerMenu] =
    useState<boolean>(false);
  const [isHoverEmail, setIsHoverEmail] = useState<boolean>(false);

  return (
    <div className="min-h-screen text-black flex w-screen justify-center inset-0 px-20 relative top-0">
      <header className="w-full h-[16rem] flex justify-between items-center z-20 px-20">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{
            opacity: 1,
            y: 0,
            transition: {
              delay: 3,
              ease: [0.6, 0.01, -0.05, 0.95],
              duration: 1,
            },
          }}
          onHoverStart={() => setIsHoverEmail(true)}
          onHoverEnd={() => setIsHoverEmail(false)}
          onClick={() =>
            navigator.clipboard.writeText("adrianfrackowiak@icloud.com")
          }
        >
          <h3 className="text-[1.5rem] cursor-pointer">
            adrianfrackowiak@icloud.com
          </h3>
          <motion.div
            initial={{ y: -5 }}
            animate={
              isHoverEmail
                ? {
                    width: "100%",
                    transition: {
                      ease: [0.6, 0.01, -0.05, 0.95],
                    },
                  }
                : {
                    width: 0,
                    transition: {
                      ease: [0.6, 0.01, -0.05, 0.95],
                    },
                  }
            }
            className="bg-black h-1"
          />
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{
            opacity: 1,
            y: 0,
            transition: {
              delay: 3.25,
              ease: [0.6, 0.01, -0.05, 0.95],
              duration: 1,
            },
          }}
          onHoverStart={() => setIsHoverHamburgerMenu(true)}
          onHoverEnd={() => setIsHoverHamburgerMenu(false)}
          className="relative space-y-1 p-2 flex flex-col justify-center cursor-pointer"
        >
          <motion.span
            initial={{ x: 0, y: 0 }}
            animate={isHoverHamburgerMenu ? { x: -5, y: -5 } : { x: 0, y: 0 }}
            className="w-8 h-[2px] bg-black rounded-sm"
          ></motion.span>
          <motion.span className="w-8 h-[2px] bg-black rounded-sm"></motion.span>
          <motion.span
            initial={{ x: 0, y: 0 }}
            animate={isHoverHamburgerMenu ? { x: 5, y: 5 } : { x: 0, y: 0 }}
            className="w-8 h-[2px] bg-black rounded-sm"
          ></motion.span>
        </motion.div>
      </header>
      <h1 className="leading-none absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full flex justify-center">
        <motion.div
          initial={{ opacity: 0, y: 150 }}
          animate={{
            opacity: 1,
            y: 0,
            transition: {
              delay: 2,
              ease: [0.6, 0.01, -0.05, 0.95],
              duration: 1,
            },
          }}
          className={`inline-block text-[6rem] font-medium`}
        >
          I'm Adrian Frąckowiak, <br /> a{" "}
          <span className="font-black">React Developer</span>.
        </motion.div>
      </h1>
    </div>
  );
};

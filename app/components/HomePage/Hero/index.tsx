import { motion } from "framer-motion";
import { useEffect, useState } from "react";

export const Hero: React.FC<{ isMenuOpen: boolean }> = ({ isMenuOpen }) => {
  const [isAnimationEnd, setIsAnimationEnd] = useState<boolean>(false);

  useEffect(() => {
    if (isAnimationEnd) {
      document.body.style.overflowY = "scroll";
    }
  }, [isAnimationEnd]);

  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflowY = "hidden";
    } else if (!isMenuOpen && isAnimationEnd) {
      document.body.style.overflowY = "scroll";
    }
  }, [isMenuOpen]);

  return (
    <div className="relative w-screen h-[50vh] sm:h-[100vh] md:h-[50vh] lg:min-h-screen">
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{
          opacity: 1,
          y: 0,
          transition: {
            delay: 3.5,
            ease: [0.6, 0.01, -0.05, 0.95],
            duration: 1,
          },
        }}
        className="max-w-[36rem] xl:max-w-[48rem] max-h-[48rem] pr-40 lg:pr-0 absolute -top-60 md:-top-48 py-10"
      >
        <img
          src="../images/me.jpg"
          alt=""
          className="object-cover mix-blend-none"
        />
      </motion.div>
      <motion.div
        initial={{ opacity: 0, y: 100 }}
        animate={{
          opacity: 1,
          y: 0,
          transition: {
            delay: 3.75,
            ease: [0.6, 0.01, -0.05, 0.95],
            duration: 1,
          },
        }}
        onAnimationComplete={() => setIsAnimationEnd(true)}
        className="absolute -top-20 lg:-top-20 right-10 xl:right-48"
      >
        <p className="font-normal sm:text-[1.5rem] w-[250px] md:w-[450px]">
          Frontend Developer, currently living in Poland near Poznań. I create
          websites and web apps using React, TypeScript, and a lot of popular
          frameworks and libraries. My passion for websites has started when I
          was 13 or 14 years old. I was so happy when I created my first website
          (probably the phpBB forum).
          <br />
          <br />
          When I am not working, I try myself in extreme sports like
          skateboarding and snowboarding. Popular "surf life" is my dream;
          freedom, nature, etc. I am also a big fan of Harry Potter and
          Wizarding World.
        </p>
      </motion.div>
    </div>
  );
};

import { motion } from "framer-motion";
import { useEffect, useState } from "react";

export const Hero = () => {
  const [isAnimationEnd, setIsAnimationEnd] = useState<boolean>(false);

  useEffect(() => {
    if (isAnimationEnd) {
      document.body.style.overflowY = "scroll";
    }
  }, [isAnimationEnd]);

  return (
    <div className="relative w-screen min-h-screen">
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
        className="w-[48rem] h-[48rem] absolute -top-48 py-10"
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
      >
        <p className="font-normal text-[1.5rem] max-w-[450px] absolute -top-20 left-[60%]">
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

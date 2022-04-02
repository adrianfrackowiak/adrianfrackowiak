import { motion } from "framer-motion";

export const Curtain = () => {
  return (
    <motion.div
      initial={{ y: 0 }}
      animate={{
        y: -1000,
        transition: {
          delay: 1,
          ease: [0.6, 0.01, -0.05, 0.95],
          duration: 1,
        },
      }}
      className="h-screen text-white absolute top-0 left-0 flex w-screen items-center justify-center text-center font-display inset-0 bg-black z-[1000]"
    />
  );
};

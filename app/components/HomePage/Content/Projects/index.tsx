import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { ProjectsList } from "~/content/projects";

export const Projects = () => {
  const [ref, inView] = useInView({
    threshold: 0.2,
  });

  return (
    <div ref={ref} className="projects w-full lg:w-1/2 h-full px-8">
      <ul className="h-full flex flex-col items-center lg:items-start space-y-20">
        {ProjectsList.map(
          ({ title, description, tags, github, live }, index) => {
            return (
              <motion.li
                key={index}
                initial={{ x: -200, opacity: 0 }}
                animate={
                  inView && {
                    x: 0,
                    opacity: 1,
                    transition: {
                      delay: 0.3 * index,
                      ease: [0.6, 0.01, -0.05, 0.95],
                      duration: 2,
                    },
                  }
                }
              >
                <h3 className="text-[1rem] lg:text-[2rem] w-full sm:max-w-[450px]">
                  {title}
                </h3>
                <p className="text-[0.8125rem] lg:text-[1.25rem] my-4 font-light w-full sm:max-w-[450px] text-gray-400">
                  {description}
                </p>
                <ul className="flex max-w-[450px] flex-wrap">
                  {tags.map((tech, index) => {
                    return (
                      <li
                        key={index}
                        className="px-2 lg:px-4 py-1 lg:py-2 text-[0.8125rem] lg:text-[1rem] rounded-2xl mr-4 mt-4 bg-black text-white"
                      >
                        {tech}
                      </li>
                    );
                  })}
                </ul>
              </motion.li>
            );
          }
        )}
        <motion.li
          initial={{ x: -200, opacity: 0 }}
          animate={
            inView && {
              x: 0,
              opacity: 1,
              transition: {
                delay:
                  0.3 *
                  (ProjectsList.reduce((a, obj) => Object.keys(obj).length, 0) -
                    2),
                ease: [0.6, 0.01, -0.05, 0.95],
                duration: 2,
              },
            }
          }
        >
          <h3 className="text-[1rem] lg:text-[2rem] max-w-[450px] font-bold lg:font-normal">
            Check my other projects on my Github profile!
          </h3>
        </motion.li>
      </ul>
    </div>
  );
};

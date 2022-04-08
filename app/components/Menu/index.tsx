import { motion } from "framer-motion";
import { Dispatch, SetStateAction } from "react";
import { Link, useLoaderData } from "remix";
import { ProjectsList } from "~/content/projects";
import { IBlogPost } from "~/interfaces/IBlogPost";

export const Menu: React.FC<{
  setIsMenuOpen: Dispatch<SetStateAction<boolean>>;
}> = ({ setIsMenuOpen }) => {
  let data = useLoaderData();
  const posts: IBlogPost[] = data.blogposts;

  return (
    <motion.div
      initial={{ x: 2000 }}
      animate={{
        x: 0,
        transition: {
          ease: [0.6, 0.01, -0.05, 0.95],
          duration: 1,
        },
      }}
      exit={{
        x: -2000,
        transition: {
          ease: [0.6, 0.01, -0.05, 0.95],
          duration: 1,
        },
      }}
      className="fixed top-0 left-0 w-screen h-screen bg-black text-white z-[9999] flex items-center justify-center"
    >
      <motion.div
        initial={{ opacity: 0 }}
        animate={{
          opacity: 1,
          transition: {
            delay: 1.5,
            ease: [0.6, 0.01, -0.05, 0.95],
            duration: 1,
          },
        }}
        className="h-full w-full relative flex flex-col items-center justify-start py-20 px-4"
      >
        <button
          onClick={() => setIsMenuOpen(false)}
          className="absolute top-4 right-4 md:top-20 md:right-20 text-white"
        >
          Close
        </button>

        <div className="mb-12 w-full md:w-[450px]">
          <h2 className="font-bold text-[2rem]">Adrian Frąckowiak</h2>
          <h3>adrianfrackowiak@icloud.com</h3>
          <button onClick={() => window.open("../adrianfrackowiak_cv_en.pdf")}>
            Get my resume
          </button>
        </div>

        <div className="w-full md:w-[450px]">
          <h4 className="font-black text-[2rem] my-4">Socials</h4>
          <ul className="space-y-2">
            <li>
              <a href="https://github.com/adrianfrackowiak/" target="_blank">
                Github 👨‍🚀
              </a>
            </li>
            <li>
              <a
                href="https://www.linkedin.com/in/adrianfrackowiak/"
                target="_blank"
              >
                LinkedIn ✨
              </a>
            </li>
          </ul>

          <h4 className="font-black text-[2rem] my-4">Projects</h4>
          <ul className="space-y-2">
            {ProjectsList.map((project, index) => {
              return (
                <li key={index}>
                  <a href={project.github}>{project.title}</a>
                </li>
              );
            })}
          </ul>

          <h4 className="font-black text-[2rem] my-4">Posts</h4>
          <ul className="space-y-2">
            {posts.map((post, index) => {
              return (
                <li key={index}>
                  <Link to={post.slug}>{post.title}</Link>
                </li>
              );
            })}
          </ul>
        </div>
      </motion.div>
    </motion.div>
  );
};

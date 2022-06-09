import { motion } from "framer-motion";
import { useState } from "react";
import { useInView } from "react-intersection-observer";
import { Link, useLoaderData } from "remix";
import { IBlogPost } from "~/interfaces/IBlogPost";

export const Posts = () => {
  let data = useLoaderData();
  const posts: IBlogPost[] = data.blogposts;
  const [isPhotoScaleAnimation, setIsPhotoScaleAnimation] =
    useState<boolean>(false);

  const [ref, inView] = useInView({
    threshold: 0.2,
  });

  return (
    <div
      ref={ref}
      className="posts w-full lg:w-1/2 max-h-screen font-normal leading-none space-y-4 grid grid-cols-1 px-4 py-20 lg:py-4"
    >
      {posts
        .reverse()
        .slice(0, 2)
        .map((post, index) => {
          return (
            <Link
              key={index}
              to={post.slug}
              className="flex items-center justify-center"
            >
              <motion.div
                initial={{ x: 200, opacity: 0 }}
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
                className="w-full h-[18rem] md:w-[36rem] md:h-[24rem] self-center flex items-center justify-center overflow-hidden relative"
              >
                <h3 className="absolute px-6 py-3 z-20 font-bold text-[1rem] md:text-2xl text-white bg-black bottom-4 left-4">
                  {post.title}
                </h3>
                <motion.div
                  className="w-full h-[18rem] md:w-[36rem] md:h-[24rem]"
                  whileHover={{
                    scale: 1.1,
                    transition: { ease: [0.6, 0.01, -0.05, 0.95], duration: 1 },
                  }}
                  style={{
                    backgroundImage: `url(${post.imgurl})`,
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                  }}
                ></motion.div>
              </motion.div>
            </Link>
          );
        })}
    </div>
  );
};

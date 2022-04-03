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
      className="w-1/2 font-normal leading-none space-y-10 flex flex-col items-center"
    >
      {posts.map((post, index) => {
        return (
          <Link to={post.slug}>
            <motion.div
              key={index}
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
              className="w-[36rem] h-[24rem] overflow-hidden relative"
            >
              <h3 className="absolute px-6 py-3 z-20 font-bold text-2xl text-white bg-black bottom-4 left-4">
                {post.title}
              </h3>
              <motion.div
                className="w-[36rem] h-[24rem]"
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

import { gql, GraphQLClient } from "graphql-request";
import { json, Link, LoaderFunction, useLoaderData } from "remix";
import { IBlogPost } from "~/interfaces/IBlogPost";

export const Posts = () => {
  let data = useLoaderData();
  const posts: IBlogPost[] = data.blogposts;

  return (
    <div className="w-1/2 font-normal leading-none space-y-10 flex flex-col items-center">
      {posts.map((post, index) => {
        return (
          <Link to={post.slug}>
            <div
              key={index}
              className="w-[36rem] h-[24rem] overflow-hidden relative"
            >
              <h3 className="absolute px-6 py-3 z-20 font-bold text-2xl text-white bg-black bottom-4 left-4">
                {post.title}
              </h3>
              <div
                className="w-[36rem] h-[24rem]"
                style={{
                  backgroundImage: `url(${post.imgurl})`,
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                }}
              ></div>
            </div>
          </Link>
        );
      })}
    </div>
  );
};

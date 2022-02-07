import { useLoaderData, json, Link, LoaderFunction } from "remix";
import { GraphQLClient, gql } from "graphql-request";
import { IBlogPost } from "~/interfaces/IBlogPost";

const GetBlogPostsQuery = gql`
  {
    blogposts {
      title
      slug
      content {
        html
      }
      date
      id
      imgurl
    }
  }
`;

export let loader: LoaderFunction = async () => {
  const graphcms = new GraphQLClient(process.env.REMIX_GRAPHCMS_API, {
    headers: {
      authorization: process.env.REMIX_GRAPHCMS_AUTH,
    },
  });

  const { blogposts } = await graphcms.request(GetBlogPostsQuery);

  return json({ blogposts });
};

export default function Index() {
  let data = useLoaderData();
  const posts: IBlogPost[] = data.blogposts;
  return (
    <div>
      <div className="py-8">
        <h3 className="text-2xl font-bold">Projects:</h3>
        <ul className="py-4 space-y-1">
          <li>
            <a
              href="https://github.com/adrianfrackowiak/adrianfrackowiak"
              target="_blank"
              className="text-[#4934eb] font-semibold"
            >
              adrianfrackowiak.com
            </a>
          </li>
          <li>
            <a
              href="https://github.com/adrianfrackowiak/openweathermap-app"
              target="_blank"
              className="text-[#4934eb] font-semibold"
            >
              OpenWeatherMap App
            </a>
          </li>
          <li>
            <a
              href="https://wraptown.pl"
              target="_blank"
              className="text-[#4934eb] font-semibold"
            >
              WrapTown.pl (commercial)
            </a>
          </li>
          <li>
            <a
              href="https://github.com/adrianfrackowiak/adrianfrackowiak-1.0"
              target="_blank"
              className="text-[#4934eb] font-semibold"
            >
              Portfolio 1.0
            </a>
          </li>
          <li>
            <a
              href="https://github.com/adrianfrackowiak/Pomi---Pomodoro-Timer"
              target="_blank"
              className="text-[#4934eb] font-semibold"
            >
              Pomi Pomodoro Timer
            </a>
          </li>
          <li className="flex">
            <a
              href="https://github.com/adrianfrackowiak/Hogsmeade-Station"
              target="_blank"
              className="text-[#4934eb] font-semibold"
            >
              Hogsmeade Station
            </a>
          </li>
          <li>
            <a
              href="https://github.com/adrianfrackowiak/harrypotter-api"
              target="_blank"
              className="text-[#4934eb] font-semibold"
            >
              Harry Potter API
            </a>
          </li>
        </ul>
      </div>
      <div className="py-8">
        <h3 className="text-2xl font-bold">Blog:</h3>
        <ul className="py-4 grid grid-cols-2 gap-4">
          {posts.map((post) => {
            return (
              <Link
                key={post.id}
                to={post.slug}
                className="text-[#4934eb] font-semibold"
              >
                <li className="relative h-56">
                  <img
                    src={post.imgurl}
                    alt={post.title}
                    className="h-full w-full object-cover"
                  />
                  <div className="absolute -bottom-10 left-0 p-4 bg-black w-4/5">
                    <h2 className="text-white font-merriweather text-xl">
                      {post.title}
                    </h2>
                  </div>
                </li>
              </Link>
            );
          })}
        </ul>
      </div>
    </div>
  );
}

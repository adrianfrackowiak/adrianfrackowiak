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
    }
  }
`;

export let loader: LoaderFunction = async () => {
  const api = process.env.REMIX_GRAPHCMS_API;
  const auth = process.env.REMIX_GRAPHCMS_AUTH;

  const graphcms = new GraphQLClient(api ? api : "", {
    headers: {
      authorization: auth ? auth : "",
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
      <ul>
        {posts.map((post) => {
          return (
            <Link key={post.id} to={post.slug}>
              <li>{post.title}</li>
            </Link>
          );
        })}
      </ul>
    </div>
  );
}

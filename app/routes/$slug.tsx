import { useLoaderData, json, LoaderFunction } from "remix";
import { GraphQLClient, gql } from "graphql-request";
import { IBlogPost } from "../interfaces/IBlogPost";

const GetBlogPostBySlug = gql`
  query BlogPageQuery($slug: String!) {
    blogpost(where: { slug: $slug }) {
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

export let loader: LoaderFunction = async ({ params }) => {
  const { slug } = params;

  const api = process.env.REMIX_GRAPHCMS_API;
  const auth = process.env.REMIX_GRAPHCMS_AUTH;

  const graphcms = new GraphQLClient(api ? api : "", {
    headers: {
      authorization: auth ? auth : "",
    },
  });

  const { blogpost } = await graphcms.request(GetBlogPostBySlug, {
    slug,
  });

  return json({ blogpost });
};

export default function BlogPostPage() {
  let data = useLoaderData();
  const blogpost: IBlogPost = data.blogpost;
  const date: Date = new Date(blogpost.date);

  return (
    <div>
      <h1>{blogpost.title}</h1>
      <p>
        {date.toLocaleDateString()}{" "}
        {date.toLocaleTimeString("en", { timeStyle: "short" })}
      </p>
      <div dangerouslySetInnerHTML={{ __html: blogpost.content.html }} />
    </div>
  );
}

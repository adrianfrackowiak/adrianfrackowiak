import { useLoaderData, json, LoaderFunction, Link } from "remix";
import { GraphQLClient, gql } from "graphql-request";
import { IBlogPost } from "../interfaces/IBlogPost";
import { MdKeyboardBackspace } from "react-icons/md";

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
      imgurl
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
    <div className="py-8">
      <h1 className="text-5xl font-merriweather mb-4">{blogpost.title}</h1>
      <p className="text-gray-400 font-light">
        {date.toLocaleDateString()}{" "}
        {date.toLocaleTimeString("en", { timeStyle: "short" })}
      </p>
      <div
        dangerouslySetInnerHTML={{ __html: blogpost.content.html }}
        className="blogcontent pt-12"
      />
      <Link to="/">
        <button className="mt-8 flex items-center font-semibold">
          <MdKeyboardBackspace className="text-[#4934eb] text-2xl mr-2" /> Go
          back
        </button>
      </Link>
    </div>
  );
}

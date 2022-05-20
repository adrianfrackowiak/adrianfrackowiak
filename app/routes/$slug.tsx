import { useLoaderData, json, LoaderFunction, Link } from "remix";
import { GraphQLClient, gql } from "graphql-request";
import { IBlogPost } from "../interfaces/IBlogPost";
import { MdKeyboardBackspace } from "react-icons/md";
import { Header } from "~/components/HomePage/Header";
import { useEffect } from "react";

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

  const graphcms = new GraphQLClient(process.env.REMIX_GRAPHCMS_API, {
    headers: {
      authorization: process.env.REMIX_GRAPHCMS_AUTH,
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

  useEffect(() => {
    document.body.style.overflowY = "scroll";
  }, []);

  return (
    <div className="flex flex-col items-center flex-1 max-w-7xl mx-auto h-full font-satoshi selection:bg-blue-700 transition-colors bg-white py-20">
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

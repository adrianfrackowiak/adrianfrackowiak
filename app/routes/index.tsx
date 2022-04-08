import { gql, GraphQLClient } from "graphql-request";
import { json, LoaderFunction } from "remix";
import { Header } from "~/components/HomePage/Header";
import { Hero } from "~/components/HomePage/Hero";
import { Content } from "~/components/HomePage/Content";
import { Footer } from "~/components/HomePage/Footer";
import { Curtain } from "~/components/HomePage/Curtain";
import { useEffect, useState } from "react";
import { Menu } from "~/components/Menu";
import { AnimatePresence } from "framer-motion";

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
  const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false);

  useEffect(() => {
    window.onbeforeunload = function () {
      window.scrollTo(0, 0);
    };
  }, []);

  return (
    <div className="flex flex-col flex-1 mx-auto h-full selection:bg-blue-700 transition-colors bg-white">
      <Curtain />
      <AnimatePresence>
        {isMenuOpen && <Menu setIsMenuOpen={setIsMenuOpen} />}
      </AnimatePresence>
      <Header setIsMenuOpen={setIsMenuOpen} />
      <Hero isMenuOpen={isMenuOpen} />
      <Content />
      <Footer />
    </div>
  );
}

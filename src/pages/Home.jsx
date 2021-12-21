import React from "react";
import { PostMasonry } from "../components";
import trending from "../assets/mocks/featured";

// style config for trending post
const trendingConfig = {
  // the second grid
  1: {
    gridArea: "1 / 2 / 3 / 3",
  },
};

const mergeStyles = (posts, config) => {
  posts.forEach((post, index) => {
    post.style = config[index];
  });
};

mergeStyles(trending, trendingConfig);

const Home = () => {
  return (
    <section className="container home">
      <div className="row">
        <h2>Trending Posts</h2>
        <PostMasonry posts={trending} columns={3} />
      </div>
    </section>
  );
};

export default Home;

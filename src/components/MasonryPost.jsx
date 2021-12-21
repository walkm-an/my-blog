import React from "react";
import { categoryColors } from "./style";
const MasonryPost = ({ post, tagsOnTop }) => {
  const imageBackground = {
    backgroundImage: `url("${require(`../assets/images/${post.image}`)}")`,
  };
  const style = { ...imageBackground, ...post.style };
  return (
    <a className="masonry-post overlay" style={style} href={post.link}>
      <div className="image-text">
        <div className="tag-container">
          {post.categories.map((tag, idx) => (
            <span
              key={idx}
              className="tag"
              style={{ backgroundColor: categoryColors[tag] }}
            >
              {tag.toUpperCase()}
            </span>
          ))}
        </div>
        <div>
          <h2 className="image-title">{post.title}</h2>
          <span className="image-date">{post.date}</span>
        </div>
      </div>
    </a>
  );
};

export default MasonryPost;

import React from "react";

export const Post = ({ post }) => {
  if (!post) {
    return null;
  }

  const { text, price } = post;
  return (
    <div>
      <p>{text}</p>
    </div>
  );
};

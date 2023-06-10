import React from "react";

export const Review = ({ review }) => {
  if (!review) {
    return null;
  }

  const { text } = review;
  return <div>{text}</div>;
};

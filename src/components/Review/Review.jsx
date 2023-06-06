import React from "react";

export const Review = ({ review }) => {
  return (
    <>
      <div>{review.text}</div>
      <div>User: {review.user}</div>
      <div>Rating: {review.rating}</div>
    </>
  );
};

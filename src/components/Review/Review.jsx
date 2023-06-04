import React from "react";

export const Review = ({ review }) => {
  if (!review?.length) {
    return <span>Empty reviews</span>;
  }

  return (
    <div>
      <h3>Reviews</h3>
      <ul>
        {review.map((review) => (
          <li>
            <p>User: {review.user}</p>
            <p>Text: {review.text}</p>
            <p>Rating: {review.rating}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};
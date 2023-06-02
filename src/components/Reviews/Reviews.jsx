import React from "react";

export const Reviews = ({ reviews }) => {
  if (!reviews?.length) {
    return <span>No reviews</span>;
  }

  console.log(reviews);

  return (
    <div>
      <h2>Reviews</h2>
      <ul>
        {reviews.map((r) => (
          <li key={r.id}>{r.text}</li>
        ))}
      </ul>
    </div>
  );
};

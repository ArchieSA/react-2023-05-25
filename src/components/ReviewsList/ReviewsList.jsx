import React from "react";
import { Review } from "../Review/Review";

export const ReviewsList = ({ reviews }) => {
  if (!reviews?.length) {
    return <span>No Reviews</span>;
  }

  return (
    <ul>
      {reviews.map((review) => (
        <li key={review.id}>
          <Review review={review} />
        </li>
      ))}
    </ul>
  );
};

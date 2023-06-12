import { Review } from "@/components/Review/Review";
import React from "react";

export const Reviews = ({ reviews }) => {
  if (!reviews?.length) {
    return <span>Empty reviews</span>;
  }

  return (
    <div>
      <h3>Reviews</h3>
      <ul>
        {reviews.map((review, index) => (
          <li key={index}>
            <Review review={review} />
          </li>
        ))}
      </ul>
    </div>
  );
};

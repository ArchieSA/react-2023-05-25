import React from "react";
import {Review} from '@/components/Review/Review'

export const Reviews = ({ reviews }) => {
  if (!reviews?.length) {
    return <span>No reviews</span>;
  }

  console.log(reviews);

  return (
    <div>
      <h2>Reviews</h2>
      <ul>
        {reviews.map((review) => (
          <li key={review.id}>
            <Review review={review}/>
          </li>
        ))}
      </ul>
    </div>
  );
};

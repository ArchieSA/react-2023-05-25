import React, { memo } from "react";
import { Review } from "../Review";

const renderReview = (review) => (
  <li>
    <Review key={review.id} {...review} />
  </li>
)

export const Reviews = memo(({ reviews }) => (
  <div>
    {reviews?.length ? (
      <>
        <h2>Ревью</h2>
        <ul>{reviews.map(renderReview)}</ul>
      </>
    ) : (
      "Ревью ещё нет"
    )}
  </div>
))

Reviews.displayName = 'Reviews'

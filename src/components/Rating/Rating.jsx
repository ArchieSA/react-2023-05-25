import React from "react";
import { RatingItem } from "../RatingItem/RatingItem";

const MAX_RATING = 5;

export const Rating = ({ value, onChange, maxRating = MAX_RATING }) => {
  const ratingsValues = Array(maxRating).fill(null).map((_, i) => i + 1);

  return (
    <div>
      {
        ratingsValues.map((rating) => (
          <RatingItem 
            key={rating}
            rating={rating} 
            selected={rating === value}
            onSelect={onChange}
          />
        ))
      }
    </div>
  );
};

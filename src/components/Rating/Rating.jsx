import React from "react";

const ratingArray = [1, 2, 3, 4, 5];

export const Rating = ({ value, onChange }) => {
  return (
    <div>
      {ratingArray.map((ratingValue) => (
        <button
          disabled={ratingValue === value}
          onClick={() => onChange(ratingValue)}
        >
          {ratingValue}
        </button>
      ))}
    </div>
  );
};

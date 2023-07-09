/* eslint-disable react/jsx-key */
import React from "react";

const ratingArray = [1, 2, 3, 4, 5];

export const Rating = ({ value, onChange }) => {
  return (
    <div>
      {new Array(5).fill(null).map((_, index) => (
        <button
          onClick={() => onChange(index + 1)}
          disabled={value === index + 1}
        >
          {index + 1}
        </button>
      ))}
    </div>
  );
};

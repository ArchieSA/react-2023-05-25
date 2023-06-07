import React from 'react';

/* eslint-disable react/jsx-key */
export const Reviews = ({ reviews }) => {
  if (!reviews?.length) {
    return <span>Empty reviews</span>;
  }

  return (
    <div>
      <h3>Reviews</h3>

      <ul>
        {reviews.map(({ text }) => (
          <li>{text}</li>
        ))}
      </ul>
    </div>
  );
};

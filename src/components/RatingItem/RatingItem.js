import React from "react";

export const RatingItem = ({ rating, selected, onSelect }) => (
  <button 
    disabled={selected}
    onClick={() => onSelect(rating)}
  >
    {rating}
  </button>
)
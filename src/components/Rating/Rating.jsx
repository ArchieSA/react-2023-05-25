import React from "react";

const rating = Array(5).fill();

export const Rating = ({ value, onChange }) => {
  
  return (
    <div>
      {rating.map((_empty, index) => {
        return (
          <button 
            onClick={() => onChange(index + 1)} 
            disabled={value === index + 1 && true }
          >{index + 1}</button>
      )})}
    </div>
  );
};

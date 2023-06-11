import React from "react";

export const Ingredients = ({ ingredients }) => {
  console.log('ING COMP', ingredients);
  if (!ingredients) {
    return null;
  }
  
  return <div>{ingredients.join(', ')}</div>;
};

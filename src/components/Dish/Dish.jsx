import React from "react";

export const Dish = ({ dish }) => {
  if (!dish) {
    return null;
  }

  const { name, price } = dish;
  return (
    <div>
      <p>Dish name: {name}</p>
      <p>Price: {price}</p>
    </div>
  );
};

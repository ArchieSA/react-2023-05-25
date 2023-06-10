import React, { useState } from "react";

export const Dish = ({ dish }) => {
  const [count, setCount] = useState(0);

  if (!dish) {
    return null;
  }

  const { name, price, ingredients } = dish;

  return (
    <div>
      <div>
        <p>{name}</p>
        { count > 0 && ingredients.map((ingredient) => <p>{ingredient}</p>)}
        <p>{price}</p>
      </div>
      <div>
        <button onClick={() => { count > 0 && setCount(count - 1) }}>-</button>
        <span>{count}</span>
        <button onClick={() => { count < 5 && setCount(count + 1) }}>+</button>
      </div>
    </div>
  );
};

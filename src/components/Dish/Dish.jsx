import React, { useState } from "react";

export const Dish = ({ dish }) => {
  if (!dish) {
    return null;
  }
  const { name, price, ingredients } = dish;
  const [count, setCount] = useState(0);
  const increment = () => {
    count >= 5 ? 5 : setCount(count + 1);
  };
  const decrement = () => {
    count === 0 ? 0 : setCount(count - 1);
  };

  return (
    <div>
      <p>{name}</p>
      <p>{price}</p>
      <p>
        <button onClick={increment}>+</button>
        <span>{count}</span>
        <button onClick={decrement}>-</button>
      </p>
      {count > 0 ? (
        <p>
          Состав:
          {ingredients.map((item) => {
            return <span>{item} </span>;
          })}
        </p>
      ) : (
        <p></p>
      )}
    </div>
  );
};

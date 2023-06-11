import React, { useState } from "react";

export const Dish = ({ dish }) => {
  if (!dish) {
    return null;
  }

  const [quantity, setQuantity] = useState(0);

  const { name, price, ingredients } = dish;

  const incrementDish = () => {
    if (quantity >= 0 && quantity < 5) {
      setQuantity((quantity) => quantity + 1);
    }
  };
  const decrementDish = () => {
    if (quantity > 0 && quantity <= 5) {
      setQuantity((quantity) => quantity - 1);
    }
  };

  return (
    <div>
      <p>{name}</p>
      <p>{price}</p>
      <button onClick={decrementDish}>-</button>
      <span>{quantity}</span>
      <button onClick={incrementDish}>+</button>
      {quantity ? (
        <ul>
          {ingredients.map((ingredient) => (
            <li>{ingredient}</li>
          ))}
        </ul>
      ) : null}
    </div>
  );
};

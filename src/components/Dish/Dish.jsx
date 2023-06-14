/* eslint-disable react/jsx-key */
import React, { useState } from "react";

import styles from "./styles.module.scss";
import { Button } from "@/components/Button/Button";
import { useCount } from "@/hooks/useCounter";


export const Dish = ({ dish }) => {
  const { count, increment, decrement } = useCount();

  if (!dish) {
    return null;
  }

  const { name, price, ingredients } = dish;

  return (
    <div className={styles.root}>
      <p>{name}</p>
      <p>{price}</p>
      <div>
        <Button
          onClick={() => decrement()}
          disabled={count === 0}
          className={styles.action}
        >
          -
        </Button>
        {count}
        <Button
          onClick={() => increment()}
          disabled={count === 5}
          className={styles.action}
          viewVariant="secondary"
        >
          +
        </Button>
      </div>
      {count > 0 && (
        <ul>
          {ingredients.map((ingredient) => (
            <li>{ingredient}</li>
          ))}
        </ul>
      )}
    </div>
  );
};

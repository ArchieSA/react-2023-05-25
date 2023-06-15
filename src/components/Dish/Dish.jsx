/* eslint-disable react/jsx-key */
import React, { useState } from "react";

import styles from "./styles.module.scss";
import { Button } from "@/components/Button/Button";
import { useDishCount } from "@/hooks/useDishCount";

export const Dish = ({ dish }) => {
  const [count, calc, {min, max} ] = useDishCount(dish);

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
          // как  вариант можно передавать не евент а заданый пропс
          onClick={(event) => calc(event.target.innerHTML)}
          disabled={min}
          className={styles.action}
        >
          -
        </Button>
        {count}
        <Button
          onClick={(event) => calc(event.target.innerHTML)}
          disabled={max}
          className={styles.action}
          viewVariant="secondary"
        >
          +
        </Button>
      </div>
      {count > 0 && (
        <ul>
          {ingredients.map((ingredient, i) => (
            <li key={i}>{ingredient}</li>
          ))}
        </ul>
      )}
    </div>
  );
};

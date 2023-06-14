/* eslint-disable react/jsx-key */
import React, { useState } from "react";

import styles from "./styles.module.scss";
import { Button } from "@/components/Button/Button";
import { useDishCount } from "@/hooks/useDishCount";

export const Dish = ({ dish, index }) => {
  // const [count, setCount] = useState(0);
  const [arr, calc] = useDishCount(dish, index);
  let velueCount =  Array.from(arr)[index]?.count;
  console.log(`index`, index);
  console.log(`hookResolve`, velueCount);

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
          // onClick={() => setCount(count - 1)}
          onClick={(event) => calc(event.target.innerHTML)}
          // disabled={count === 0}
          className={styles.action}
        >
          -
        </Button>
        {velueCount}
        <Button
          // onClick={() => setCount(count + 1)}
          onClick={(event) => calc(event.target.innerHTML)}
          // disabled={count === 5}
          className={styles.action}
          viewVariant="secondary"
        >
          +
        </Button>
      </div>
      {velueCount > 0 && (
        <ul>
          {ingredients.map((ingredient, i) => (
            <li key={i}>{ingredient}</li>
          ))}
        </ul>
      )}
    </div>
  );
};

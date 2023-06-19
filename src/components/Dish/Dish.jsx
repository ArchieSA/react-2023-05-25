/* eslint-disable react/jsx-key */
import React from "react";

import styles from "./styles.module.scss";
import classNames from "classnames";

import { Button } from "@/components/Button/Button";
import { useAmount } from "@/hooks/useAmount";
import { DishSum } from "./DishSum";

export const Dish = ({ dish, className }) => {
  const { amount, decrement, increment } = useAmount();

  if (!dish) {
    return null;
  }

  const { name, price } = dish;

  return (
    <div className={classNames(styles.root, className)}>
      <span className={styles.title}>{name}</span>
      <span className={styles.price}>{price}р</span>

      <DishSum 
        amount={amount}
        price={price}
        className={styles.sum}
      />

      <Button
        className={styles.decrementAction}
        viewVariant="secondary"
        disabled={amount === 0}
        onClick={decrement}
      >
        -
      </Button>
      {amount}
      <Button
        className={styles.incrementAction}
        viewVariant="secondary"
        disabled={amount === 5}
        onClick={increment}
      >
        +
      </Button>
    </div>
  );
};

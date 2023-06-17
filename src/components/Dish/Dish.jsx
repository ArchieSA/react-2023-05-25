/* eslint-disable react/jsx-key */
import React, { useState } from "react";

import styles from "./styles.module.scss";
import { Button } from "@/components/Button/Button";
import { useAmount } from "@/hooks/useAmount";
import classNames from "classnames";
import { useDesctop } from "@/contexts/desktop";

export const Dish = ({ dish, className }) => {
  const { amount, decrement, increment } = useAmount();
  const desctop = useDesctop()

  if (!dish) {
    return null;
  }

  const { name, price } = dish;

  return (
    <div className={classNames(styles.root, className)}>
      <span className={styles.title}>{name}</span>
      <span
        className={styles.price}
      >{price}р</span>
      {amount > 0 && <span className={classNames(
        styles.sum,
        {
          [styles.mobile]: desctop === "mobile",
        }
      )}>{amount * price}р</span>}
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

/* eslint-disable react/jsx-key */
import React, { useState } from "react";

import styles from "./styles.module.scss";
import { Button } from "@/components/Button/Button";
import classNames from "classnames";
import { useIsMobile } from "@/contexts/device";
import { useAmount } from "@/hooks/useAmount";

export const Dish = ({ dish, className }) => {
  const isMobile = useIsMobile();

  const {amount, increment, decrement} = useAmount();

  const { name, price } = dish;

  return (
    <div className={classNames(styles.root, className)}>
      <span className={styles.title}>{name}</span>
      <span className={styles.price}>{price}р</span>
      {!isMobile && amount > 0 && (
        <span className={styles.sum}>{amount * price}р</span>
      )}
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

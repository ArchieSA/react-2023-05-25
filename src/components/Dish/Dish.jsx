/* eslint-disable react/jsx-key */
import React from "react";
import { Button } from "@/components/Button/Button";
import classNames from "classnames";
import { useIsMobile } from "@/contexts/device";
import styles from "./styles.module.scss";

export const Dish = ({ dish, amount, increment, decrement, className }) => {
  const isMobile = useIsMobile();
  const { name, price } = dish;
  const showExtraInfo = !isMobile && amount > 0

  return (
    <div className={classNames(styles.root, className)}>
      <span className={styles.title}>{name}</span>
      <span className={styles.price}>{price}р</span>
      {showExtraInfo && (
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
      {showExtraInfo && dish.ingredients && (
        <div className={styles.break}></div>
      )}
      {showExtraInfo && dish.ingredients && (
        <div className={styles.ingrad}>{dish.ingredients.join(", ")}</div>
      )}
    </div>
  );
};

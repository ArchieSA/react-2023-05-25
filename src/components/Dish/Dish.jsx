"use client"

import React from "react";

import styles from "./styles.module.scss";
import { Button } from "@/components/Button/Button";
import classNames from "classnames";
import { useIsMobile } from "@/contexts/device";

export const Dish = ({ dish, amount, increment, decrement, className }) => {
  const isMobile = useIsMobile();

  const { name, price, ingredients } = dish;

  return (
    <div className={classNames(styles.root, className)}>
      <div className={styles.head}>
        <span className={styles.title}>{name}</span>
        <span className={styles.price}>{price}р</span>
      </div>
      {amount !== undefined ?
        <div>
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
        </div> :
        <div className={styles.ingredients}>
          <h4>Ingredients:</h4>
          <div className={styles.body}>
            {ingredients.map((ingredients, index) => (<div key={index}>{ingredients}</div>))}
          </div>
        </div>
      }
    </div>
  );
};

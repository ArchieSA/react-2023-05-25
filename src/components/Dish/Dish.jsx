/* eslint-disable react/jsx-key */
import React, { useState } from "react";
import { Button } from "@/components/Button/Button";
import { useCount } from './hooks/useCount'
import styles from "./styles.module.scss";

export const Dish = ({ dish }) => {
  const { count, api: { inc, dec, reset } } = useCount(0)

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
          onClick={dec}
          disabled={count === 0}
          className={styles.action}
        >
          -
        </Button>
        &nbsp;{count || 0}&nbsp;&nbsp;
        <Button
          onClick={inc}
          disabled={count === 5}
          className={styles.action}
          viewVariant="secondary"
        >
          +
        </Button>
        &nbsp;&nbsp;&nbsp;&nbsp;
        <Button
          onClick={reset}
          disabled={count === 0}
          className={styles.action}
        >
          Очистить
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

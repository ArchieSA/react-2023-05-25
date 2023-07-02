import React from "react";

import styles from "./styles.module.scss";
import classNames from "classnames";

import { Dish } from "../Dish/Dish";

/* eslint-disable react/jsx-key */
export const Menu = ({ menu, className }) => {
  return (
    <div className={classNames(styles.root, className)}>
      <h3>Menu</h3>
      <div className={styles.dishList}>
        {menu.map((dish) => (
          <Dish dish={dish} className={styles.dish} />
        ))}
      </div>
    </div>
  );
};

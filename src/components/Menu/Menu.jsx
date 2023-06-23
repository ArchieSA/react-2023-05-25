import React from "react";

import styles from "./styles.module.scss";
import classNames from "classnames";
import { DishContainer } from "@/containers/menuContainer/DishContainer";

/* eslint-disable react/jsx-key */
export const Menu = ({ dishIds, className }) => {
  return (
    <div className={classNames(styles.root, className)}>
      <h3>Menu</h3>
      <div className={styles.dishList}>
        {dishIds.map((dishId) => (
          <DishContainer dishId={dishId} className={styles.dish} />
        ))}
      </div>
    </div>
  );
};

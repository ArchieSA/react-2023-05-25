import { Dish } from "@/components/Dish/Dish";
import React from "react";

import styles from "./styles.module.scss";
import classNames from "classnames";

/* eslint-disable react/jsx-key */
export const Menu = ({ menu, className }) => {
  if (!menu?.length) {
    return <span>Empty Menu</span>;
  }

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

import React from "react";

import styles from "./styles.module.scss";
import classNames from "classnames";
import { DishContainer } from "@/containers/DishContainer";

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
          <DishContainer dish={dish} className={styles.dish} />
        ))}
      </div>
    </div>
  );
};

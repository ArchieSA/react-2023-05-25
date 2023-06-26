import React from "react";

import styles from "./styles.module.scss";
import classNames from "classnames";
import { DishContainer } from "@/containers/DishContainer";

/* eslint-disable react/jsx-key */
export const Menu = ({ dishIds, className, status }) => {
  return (
    <div className={classNames(styles.root, className)}>
      <h3>Menu</h3>
      <div className={styles.dishList}>
        {dishIds.map((dishId) => (
          !status || status === "finished" ? <DishContainer dishId={dishId} className={styles.dish} /> : <p>Loading...</p>
        ))}
      </div>
    </div>
  );
};

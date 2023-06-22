import React from "react";

import styles from "./styles.module.scss";
import classNames from "classnames";
import { DishContainer } from "@/containers/DishContainer";

/* eslint-disable react/jsx-key */
export const Menu = ({ menuIds }) => {
  if (!menuIds?.length) {
    return <span>Empty Menu</span>;
  }

  return (
    <div className={classNames(styles.root, styles.menu)}>
      <h3>Menu</h3>
      <div className={styles.dishList}>
        {menuIds.map((id) => (
          <DishContainer dishId={id} className={styles.dish} />
        ))}
      </div>
    </div>
  );
};

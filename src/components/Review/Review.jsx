import React from "react";

import styles from "./styles.module.scss";
import classNames from "classnames";

export const Review = ({ user, rating, text, className }) => {

  return (
    <div className={classNames(styles.root, className)}>
      <div className={styles.header}>
        <div>{user}</div>
        <div>{rating}</div>
      </div>
      <p>{text}</p>
    </div>
  );
};

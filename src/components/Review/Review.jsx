import React from "react";

import styles from "./styles.module.scss";
import classNames from "classnames";

export const Review = ({ review, className }) => {
  if (!review) {
    return null;
  }

  const { text, user, rating } = review;
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

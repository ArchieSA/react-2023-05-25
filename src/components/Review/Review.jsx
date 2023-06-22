import React from "react";

import styles from "./styles.module.scss";
import classNames from "classnames";

export const Review = ({ review, user, className }) => {
  if (!review) {
    return null;
  }

  const { text, rating } = review;
  return (
    <div className={classNames(styles.root, className)}>
      <div className={styles.header}>
        <div>{user.name}</div>
        <div>{rating}</div>
      </div>
      <p>{text}</p>
    </div>
  );
};

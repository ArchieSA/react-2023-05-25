import React from "react";

import styles from "./styles.module.scss";

export const Review = ({ review }) => {
  if (!review) {
    return null;
  }

  const { text } = review;
  return <div className={styles.root}>{text}</div>;
};

import React from "react";

import styles from "./styles.module.scss";
import classNames from "classnames";
import { UserContainer } from "@/containers/UserContainer";

export const Review = ({ review, className }) => {
  if (!review) {
    return null;
  }

  const { text, userId, rating } = review;
  return (
    <div className={classNames(styles.root, className)}>
      <div className={styles.header}>
        <UserContainer userId={userId} />
        <div>{rating}</div>
      </div>
      <p>{text}</p>
    </div>
  );
};

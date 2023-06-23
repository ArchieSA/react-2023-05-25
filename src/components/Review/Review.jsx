import React from "react";

import styles from "./styles.module.scss";
import classNames from "classnames";
import { UserContainer } from "@/containers/usersContainer/usersContainer";

export const Review = ({ review }) => {
  const { userId, rating, text } = review;
  return (
    <div className={classNames(styles.root)}>
      <div className={styles.header}>
        <UserContainer userId={userId} />
        <div>{rating}</div>
      </div>
      <p>{text}</p>
    </div>
  );
};

import React from "react";
import classNames from "classnames";
import { User } from '@/components/User/User'
import { useGetUsersQuery } from "@/redux/services/api";
import styles from "./styles.module.scss";

export const Review = ({ review, className }) => {
  const { text, rating, userId } = review || {};
  const user = useGetUsersQuery(undefined, {
    selectFromResult: ({ data }) => data?.find( ({ id }) => id === userId )
  })

  if (!review) {
    return null;
  }

  return (
    <div className={classNames(styles.root, className)}>
      <div className={styles.header}>
        <User user={user} />
        <div>{rating}</div>
      </div>
      <p>{text}</p>
    </div>
  );
};

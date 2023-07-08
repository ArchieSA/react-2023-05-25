'use client';
import styles from "./styles.module.scss";
import classNames from "classnames";
import { NewReviewFormContainer } from "@/containers/NewReviewFormContainer";
import { User } from "@/components/User/User";
import { useState } from "react";

export const Review = ({ review, users = [], className }) => {
  const [isEditMode, setIsEditMode] = useState(false);

  if (!review) {
    return null;
  }

  const { text, userId, rating } = review;
  const user = users.find(u => u.id = userId)

  return (
    <div className={classNames(styles.root, className)}>
      <button onClick={() => setIsEditMode(!isEditMode)}>switchMode</button>
      {!isEditMode ? (
        <>
          <div className={styles.header}>
            <User user={user} />
            <div>{rating}</div>
          </div>
          <p>{text}</p>
        </>
      ) : (
        <NewReviewFormContainer review={review} done={() => setIsEditMode(false)} />
      )}
    </div>
  );
};

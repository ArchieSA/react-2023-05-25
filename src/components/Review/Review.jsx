'use client'

import React, { useState } from "react";
import classNames from "classnames";
import { UserContainer } from "@/containers/UserContainer";
import { NewReviewFormContainer } from "@/containers/NewReviewFormContainer";
import styles from "./styles.module.scss";

export const Review = ({ review, className, restaurantId }) => {
  const [isEditMode, setIsEditMode] = useState(false);

  if (!review) {
    return null;
  }

  const { text, userId, rating } = review;
  return (
    <div className={classNames(styles.root, className)}>
      <button onClick={() => setIsEditMode((mode) => !mode)}>Edit</button>
      <br />
      {!isEditMode ? (
        <>
          <div className={styles.header}>
            <UserContainer userId={userId} />
            <div>{rating}</div>
          </div>
          <p>{text}</p>
        </>
      ) : (
        <NewReviewFormContainer review={review} restaurantId={restaurantId} onSaved={() => setIsEditMode(false)} />
      )}
    </div>
  );
};

"use client";

import { NewReviewFormContainer } from "@/containers/NewReviewFormContainer";
import { UserContainer } from "@/containers/UserContainer";
import classNames from "classnames";
import React, { useState } from "react";
import styles from "./styles.module.scss";

export const Review = ({ review, className }) => {
  const [isEditMode, setIsEditMode] = useState(false);
  if (!review) {
    return null;
  }
  const { text, userId, rating } = review;
  return (
    <div className={classNames(styles.root, className)}>
      <button onClick={() => setIsEditMode(!isEditMode)}>switchMode</button>
      {!isEditMode ? (
        <>
          <div className={styles.header}>
            <UserContainer userId={userId} />
            <div>{rating}</div>
          </div>
          <p>{text}</p>
        </>
      ) : (
        <NewReviewFormContainer review={review} />
      )}
    </div>
  );
};

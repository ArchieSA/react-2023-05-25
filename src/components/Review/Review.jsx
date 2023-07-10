import React, { useState } from "react";

import styles from "./styles.module.scss";
import classNames from "classnames";
import { NewReviewFormContainer } from "@/containers/NewReviewFormContainer";
import { User } from "@/components/User/User";

export const Review = ({ review, className, users }) => {
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
            <User user={users?.find(({ id }) => id === userId)} />
            <div>{rating}</div>
          </div>
          <p>{text}</p>
        </>
      ) : (
        <NewReviewFormContainer
          review={review}
          users={users}
         setIsEditMode={(param) => setIsEditMode(param)} 
        />
      )}
    </div>
  );
};

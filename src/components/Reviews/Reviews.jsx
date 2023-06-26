import { Review } from "@/components/Review/Review";
import React from "react";

import styles from "./styles.module.scss";
import classNames from "classnames";
import { ReviewContainer } from "@/containers/ReviewContainer";

/* eslint-disable react/jsx-key */
export const Reviews = ({ reviewIds, className, status}) => {
  return (
    <div className={classNames(styles.root, className)}>
      <h3>Reviews</h3>
      <div className={styles.reviews}>
        {reviewIds.map((reviewId) => (
          !status || status=== "finished" ? <ReviewContainer reviewId={reviewId} className={styles.review} /> : <p>Loading...</p>
        ))}
      </div>
    </div>
  );
};

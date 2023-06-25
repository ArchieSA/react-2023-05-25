import React from "react";

import styles from "./styles.module.scss";
import classNames from "classnames";
import { ReviewContainer } from "@/containers/ReviewContainer";

export const Reviews = ({ reviewIds, className, renderSplash }) => {
  return (
    <div className={classNames(styles.root, className)}>
      <h3>Reviews</h3>
      <div className={styles.reviews}>
        {renderSplash(reviewIds.map((reviewId) => (
          <ReviewContainer key={reviewId} reviewId={reviewId} className={styles.review} />
        )))}
      </div>
    </div>
  );
};

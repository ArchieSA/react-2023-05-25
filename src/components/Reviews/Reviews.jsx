import React from "react";
import classNames from "classnames";
import { ReviewContainer } from "@/containers/ReviewContainer";
import styles from "./styles.module.scss";

export const Reviews = ({ reviews, className }) => {
  if (!reviews?.length) {
    return <span>Empty reviews</span>;
  }

  return (
    <div className={classNames(styles.root, className)}>
      <h3>Reviews</h3>
      <div className={styles.reviews}>
        {reviews.map((reviewId) => (
          <ReviewContainer key={reviewId} reviewId={reviewId} className={styles.review} />
        ))}
      </div>
    </div>
  );
};

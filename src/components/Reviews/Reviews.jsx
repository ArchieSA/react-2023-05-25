import React from "react";
import classNames from "classnames";
import { Review } from "@/components/Review/Review";
import styles from "./styles.module.scss";


export const Reviews = ({ reviews, className }) => {
  if (!reviews) {
    return null;
  }

  return (
    <div className={classNames(styles.root, className)}>
      <h3>Reviews</h3>
      <div className={styles.reviews}>
        {reviews.map((review) => (
          <Review key={review.id} review={review} className={styles.review} />
        ))}
      </div>
    </div>
  );
};

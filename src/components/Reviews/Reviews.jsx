import { Review } from "@/components/Review/Review";
import React from "react";

import styles from "./styles.module.scss";
import classNames from "classnames";
import { ReviewContainer } from "@/containers/reviewContainer/ReviewContainer";

/* eslint-disable react/jsx-key */
export const Reviews = ({ reviewIds }) => {
  return (
    <div className={classNames(styles.root)}>
      <h3>Reviews</h3>
      <div className={styles.reviews}>
        {reviewIds.map((id) => (
          <ReviewContainer reviewId={id} />
        ))}
      </div>
    </div>
  );
};

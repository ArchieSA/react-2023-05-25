import { Review } from "@/components/Review/Review";
import React from "react";

import styles from "./styles.module.scss";
import classNames from "classnames";
import { ReviewContainer } from "@/containers/ReviewContainer";

/* eslint-disable react/jsx-key */
export const Reviews = ({ rewiewsIds }) => {
  if (!rewiewsIds?.length) {
    return <span>Empty reviews</span>;
  }

  return (
    <div className={classNames(styles.root, styles.reviews)}>
      <h3>Reviews</h3>
      <div className={styles.reviews}>
        {rewiewsIds.map((id) => (
          <ReviewContainer reviewId={id} className={styles.review} />
        ))}
      </div>
    </div>
  );
};

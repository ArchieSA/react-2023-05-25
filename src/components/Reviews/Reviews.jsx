import React from "react";
import classNames from "classnames";
import { Review } from "@/components/Review/Review";
import { useGetUsersQuery } from "@/redux/services/api";
import styles from "./styles.module.scss";


export const Reviews = ({ reviews, className }) => {
  const { isFetching, error, isError } = useGetUsersQuery()

  if (!reviews) {
    return null;
  }

  return (
    <div className={classNames(styles.root, className)}>
      <h3>Reviews</h3>
      <div className={styles.reviews}>
        {isFetching && <div>Loading users...</div>}
        {isError && <div>{new String(error)}</div>}
        {!isFetching && !isError && reviews.map((review) => (
          <Review key={review.id} review={review} className={styles.review} />
        ))}
      </div>
    </div>
  );
};

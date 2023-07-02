import { Review } from "@/components/Review/Review";
import React, { useState } from "react";

import styles from "./styles.module.scss";
import classNames from "classnames";
import { useGetReviewsQuery } from "@/redux/services/api";
import { MenuSkeleton } from "../Menu/MenuSkeleton";

/* eslint-disable react/jsx-key */
export const Reviews = ({ restaurantId, className, users }) => {
  const { data: reviews, isLoading, isFetching } = useGetReviewsQuery(restaurantId)

  if (isLoading) {
    return <MenuSkeleton />;
  }

  if (!reviews?.length) {
    return null;
  }
  return (
    <div className={classNames(styles.root, className)}>
      <h3>Reviews</h3>
      <div className={styles.reviews}>
        {reviews.map((review) => (
          <Review
            restaurantId={restaurantId}
            users={users} // все юзеры, нужны при заполнении формы
            review={review}
            className={styles.review}
            user={users?.find(obj => obj.id === review.userId)} //конкретные юзеры в текущем ресторане
            isFetching={isFetching} //подгрузка при запросе
          />
        ))}
      </div>
    </div>
  );
};

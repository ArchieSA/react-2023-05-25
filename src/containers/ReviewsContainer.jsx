import { Reviews } from "@/components/Reviews/Reviews";
import { selectRestaurantReviewIds } from "@/redux/features/restaurant/selectors";
import { selectReviewFetchStatus } from "@/redux/features/review/selectors";
import React from "react";
import { useSelector } from "react-redux";
import { STATUSES } from "@/constants/statuses";
import { Loader } from "@/components/Loader/Loader";

export const ReviewsContainer = ({ restaurantId, className }) => {
  const reviewIds = useSelector((state) =>
    selectRestaurantReviewIds(state, restaurantId)
  );
  const fetchStatus = useSelector(selectReviewFetchStatus)

  if (!reviewIds?.length) {
    return null;
  }

  return (
    fetchStatus !== STATUSES.finished
      ? <Loader status={fetchStatus} prefix="Reviews" />
      : <Reviews reviewIds={reviewIds} className={className} />
  )
};

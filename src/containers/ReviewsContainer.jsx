import { Reviews } from "@/components/Reviews/Reviews";
import { selectRestaurantReviewIds } from "@/redux/features/restaurant/selectors";
import { selectReviewIsLoading } from "@/redux/features/review/selectors";
import React from "react";
import { useSelector } from "react-redux";

export const ReviewsContainer = ({ restaurantId, className }) => {
  const reviewIds = useSelector((state) =>
    selectRestaurantReviewIds(state, restaurantId)
  );

  const status = useSelector((state) => selectReviewIsLoading(state));

  if (status) {
    return <div>Reviews are loading, wait please...</div>
  }

  if (!reviewIds?.length) {
    return null;
  }

  return <Reviews reviewIds={reviewIds} className={className} />;
};

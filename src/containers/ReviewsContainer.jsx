import { Reviews } from "@/components/Reviews/Reviews";
import { selectRestaurantReviewIds } from "@/redux/features/restaurant/selectors";
import { selectReviewStatus } from "@/redux/features/review/selectors";
import { reviewThunk } from "@/redux/features/review/thunks/reviewThunk";
import React from "react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

export const ReviewsContainer = ({ restaurantId, className }) => {
  const reviewIds = useSelector((state) =>
    selectRestaurantReviewIds(state, restaurantId)
  );
  const status = useSelector((state) => selectReviewStatus(state))
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(reviewThunk(restaurantId))
  }, [restaurantId])

  if (!reviewIds?.length) {
    return null;
  }

  return <Reviews reviewIds={reviewIds} className={className} status={status}/>;
};

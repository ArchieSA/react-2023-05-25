import { Reviews } from "@/components/Reviews/Reviews";
import { selectRestaurantReviewIds } from "@/redux/features/restaurant/selectors";
import { fetchReview } from "@/redux/features/review/thunk/fetchReview";
import { fetchUsers } from "@/redux/features/user/thunk/fetchUsers";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

export const ReviewsContainer = ({ restaurantId, className }) => {
  const reviewIds = useSelector((state) =>
    selectRestaurantReviewIds(state, restaurantId)
  );
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchUsers());
  }, []);
  useEffect(() => {
    dispatch(fetchReview(restaurantId));
  }, [restaurantId]);

  if (!reviewIds?.length) {
    return null;
  }

  return <Reviews reviewIds={reviewIds} className={className} />;
};

import React, { useEffect } from "react";

import { Reviews } from "@/components/Reviews/Reviews";
import { withLoaderComponent } from "@/hocs/WithLoaderComponent";
import { selectRestaurantReviewIds } from "@/redux/features/restaurant/selectors";
import { selectReviewIsLoading } from '@/redux/features/review/selectors'
import { useDispatch, useSelector } from "react-redux";
import { fetchReviewsById } from "@/redux/features/review/thunks/fetchReviewsById";

const ReviewsWithLoader = withLoaderComponent(Reviews);

export const ReviewsContainer = ({ restaurantId, className }) => {
  const reviewIds = useSelector((state) =>
    selectRestaurantReviewIds(state, restaurantId)
  );

  const isPending = useSelector(selectReviewIsLoading);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchReviewsById(restaurantId))
  }, [restaurantId, dispatch]);

  if (!reviewIds?.length) {
    return null;
  }

  return (
    <ReviewsWithLoader 
      isPending={isPending} 
      reviewIds={reviewIds} 
      className={className} 
    />
  );
};

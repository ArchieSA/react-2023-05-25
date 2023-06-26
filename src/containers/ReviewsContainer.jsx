import React from "react";

import { Reviews } from "@/components/Reviews/Reviews";
import { withLoaderComponent } from "@/hocs/WithLoaderComponent";
import { selectRestaurantReviewIds } from "@/redux/features/restaurant/selectors";
import { selectReviewIsLoading } from '@/redux/features/review/selectors'
import { useSelector } from "react-redux";

const ReviewsWithLoader = withLoaderComponent(Reviews);

export const ReviewsContainer = ({ restaurantId, className }) => {
  const reviewIds = useSelector((state) =>
    selectRestaurantReviewIds(state, restaurantId)
  );

  const isPending = useSelector(selectReviewIsLoading);

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

import { Reviews } from "@/components/Reviews/Reviews";
import { ReviewsSkeleton } from "@/components/Reviews/ReviewsSkeleton";
import { useGetReviewsQuery } from "@/redux/services/api";
import React from "react";

export const ReviewsContainer = ({ restaurantId, className }) => {

  const {data: reviews, isFetching} = useGetReviewsQuery(restaurantId);

  if(isFetching)
  {
    return <ReviewsSkeleton />;
  }

  if (!reviews?.length) {
    return null;
  }


  return <Reviews reviews={reviews} className={className} />;
};

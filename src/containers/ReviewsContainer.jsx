import { Reviews } from "@/components/Reviews/Reviews";
import { useGetReviewsQuery } from "@/redux/services/api";
import React from "react";


export const ReviewsContainer = ({ restaurantId, className }) => {
  const { data: reviews, isLoading } = useGetReviewsQuery(restaurantId);

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (!reviews?.length) {
    return null;
  }

  return <Reviews reviews={reviews} className={className} />;
};

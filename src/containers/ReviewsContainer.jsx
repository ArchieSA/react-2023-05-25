import React, { useEffect } from "react";
import { Reviews } from "@/components/Reviews/Reviews";
import { useGetReviewsQuery } from '@/redux/services/api'

export const ReviewsContainer = ({ restaurantId, className }) => {
  const { data, isFetching, error, isError } = useGetReviewsQuery(restaurantId)  

  if (isFetching) {
    return <div>Loading...</div>;
  }

  if (isError) {
    return <span>{new String(error)}</span>
  }

  if (!data?.length) {
    return null;
  }

  return <Reviews reviews={data} className={className} />;
};

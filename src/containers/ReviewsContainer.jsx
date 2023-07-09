import React from "react";
import { Reviews } from "@/components/Reviews/Reviews";
import { fetchReviews } from "@/services";

export const ReviewsContainer = async ({ restaurantId, className }) => {
  const reviews = await fetchReviews(restaurantId);

  return <Reviews reviews={reviews} className={className} restaurantId={restaurantId} />;
};

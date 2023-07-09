import { Reviews } from "@/components/Reviews/Reviews";
import { fetchReviews } from "@/services";
import React from "react";

export async function ReviewsContainer({ restaurantId, className }) {
  const reviews = await fetchReviews(restaurantId);

  if (!reviews?.length) {
    return null;
  }

  return <Reviews reviews={reviews} className={className} />;
}

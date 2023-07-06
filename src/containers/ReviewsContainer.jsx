import { Reviews } from "@/components/Reviews/Reviews";
import { fetchReviews } from "@/services";
import React from "react";

export async function ReviewsContainer ({ restaurantId, className, users }) {
  const reviews = await fetchReviews(restaurantId);

  if (!reviews?.length || !users?.length) {
    return null;
  }

  return <Reviews reviews={reviews} className={className} users={users} />;
};

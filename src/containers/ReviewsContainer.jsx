"use client";

import { Reviews } from "@/components/Reviews/Reviews";
import { useGetReviewsQuery } from "@/redux/services/api";
import { fetchReviews } from "@/services";
import React from "react";

export function ReviewsContainer({ restaurantId = null, className, users }) {

  const { data: reviews } = useGetReviewsQuery(restaurantId);

  if (!reviews?.length || !users?.length) {
    return null;
  }

  return <Reviews reviews={reviews} className={className} users={users} />;
};

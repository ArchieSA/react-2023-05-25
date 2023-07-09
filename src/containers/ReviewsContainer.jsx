import { Reviews } from "@/components/Reviews/Reviews";
import { STATUSES } from "@/constants/statuses";
import { useRequest } from "@/hooks/useRequest";
import { selectRestaurantReviewIds } from "@/redux/features/restaurant/selectors";
import { selectIsReviewLoading } from "@/redux/features/review/selectors";
import { fetchReviewsByRestaurantIdIfNotExist } from "@/redux/features/review/thunks/fetchReviewsByRestaurantIdIfNotExist";
import { fetchUsersIfNotExist } from "@/redux/features/user/thunks/fetchUsersIfNotExisted";
import { useGetReviewsQuery, useGetUsersQuery } from "@/redux/services/api";
import { fetchReviews } from "@/services";
import React from "react";
import { useDispatch, useSelector } from "react-redux";

export async function ReviewsContainer({ restaurantId, className }) {
  const reviews = await fetchReviews(restaurantId);

  if (!reviews?.length) {
    return null;
  }

  return <Reviews reviews={reviews} className={className} />;
};

import { Reviews } from "@/components/Reviews/Reviews";
import { STATUSES } from "@/constants/statuses";
import { useRequest } from "@/hooks/useRequest";
import { selectRestaurantReviewIds } from "@/redux/features/restaurant/selectors";
import { selectIsReviewLoading } from "@/redux/features/review/selectors";
import { fetchReviewsByRestaurantIdIfNotExist } from "@/redux/features/review/thunks/fetchReviewsByRestaurantIdIfNotExist";
import { fetchUsersIfNotExist } from "@/redux/features/user/thunks/fetchUsersIfNotExisted";
import { useGetReviewsQuery, useGetUsersQuery } from "@/redux/services/api";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

export const ReviewsContainer = ({ restaurantId, className }) => {
  const { data: reviews, isFetching, error } = useGetReviewsQuery(restaurantId);
  const {
    data: users,
    isLoading: isUsersLoading,
    error: usersError,
  } = useGetUsersQuery();

  if (isFetching || isUsersLoading) {
    return <div>Loading...</div>;
  }

  if (!reviews?.length || !users?.length || error || usersError) {
    return null;
  }

  return <Reviews reviews={reviews} className={className} />;
};

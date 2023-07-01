import { Reviews } from "@/components/Reviews/Reviews";
import { STATUSES } from "@/constants/statuses";
import { useRequest } from "@/hooks/useRequest";
import { selectRestaurantReviewIds } from "@/redux/features/restaurant/selectors";
import { selectIsReviewLoading } from "@/redux/features/review/selectors";
import { fetchReviewsByRestaurantIdIfNotExist } from "@/redux/features/review/thunks/fetchReviewsByRestaurantIdIfNotExist";
import { selectIsUsersLoading } from "@/redux/features/user/selectors";
import { fetchUsersIfNotExist } from "@/redux/features/user/thunks/fetchUsersIfNotExisted";
import { useGetReviewsQuery, useGetUsersQuery } from "@/redux/services/api";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

export const ReviewsContainer = ({ restaurantId, className }) => {
  const { data, isFetching } = useGetReviewsQuery(restaurantId)

  if (isFetching) {
    return <div>Loading...</div>;
  }

  if (!data?.length) {
    return null;
  }

  return <Reviews reviews={data} className={className} />;
};

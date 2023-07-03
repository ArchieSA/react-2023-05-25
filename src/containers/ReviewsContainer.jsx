import { Reviews } from "@/components/Reviews/Reviews";
import { STATUSES } from "@/constants/statuses";
import { useRequest } from "@/hooks/useRequest";
import { selectRestaurantReviewIds } from "@/redux/features/restaurant/selectors";
import { selectIsReviewLoading } from "@/redux/features/review/selectors";
import { fetchReviewsByRestaurantIdIfNotExist } from "@/redux/features/review/thunks/fetchReviewsByRestaurantIdIfNotExist";
import { selectIsUsersLoading } from "@/redux/features/user/selectors";
import { fetchUsersIfNotExist } from "@/redux/features/user/thunks/fetchUsersIfNotExisted";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

export const ReviewsContainer = ({ restaurantId, className }) => {
  const reviewIds = useSelector((state) =>
    selectRestaurantReviewIds(state, restaurantId)
  );

  const reviewLoadingStatus = useRequest(
    fetchReviewsByRestaurantIdIfNotExist,
    restaurantId
  );
  const userLoadingStatus = useRequest(fetchUsersIfNotExist);

  if ([reviewLoadingStatus, userLoadingStatus].includes(STATUSES.pending)) {
    return <div>Loading...</div>;
  }

  if (!reviewIds?.length) {
    return null;
  }

  return <Reviews reviewIds={reviewIds} className={className} />;
};

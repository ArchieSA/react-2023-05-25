import { Reviews } from "@/components/Reviews/Reviews";
import { STATUSES } from "@/constants/statuses";
import { selectRestaurantReviewIds } from "@/redux/features/restaurant/selectors";
import { selectReviewStatus } from "@/redux/features/review/selectors";
import { fetchReviewByRestaurnatIfNotPresent } from "@/redux/features/review/thunks/fetchReviewByRestaurantIfNotPresent";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

export const ReviewsContainer = ({ restaurantId, className }) => {
  const reviewIds = useSelector((state) =>
    selectRestaurantReviewIds(state, restaurantId)
  );
  const dispatch = useDispatch();

  useEffect(()=>{
    dispatch(fetchReviewByRestaurnatIfNotPresent(restaurantId));
  },[restaurantId]);

  const status = useSelector((state) => selectReviewStatus(state));

  if (!reviewIds?.length) {
    return null;
  }

  if(status === STATUSES.pending)
  {
    return <div>Reviews pending</div>
  }

  return <Reviews reviewIds={reviewIds} className={className} />;
};

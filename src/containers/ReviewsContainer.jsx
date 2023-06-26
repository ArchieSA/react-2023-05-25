import { Loader } from '@/components/Loader/Loader';
import { Reviews } from '@/components/Reviews/Reviews';
import { STATUSES } from '@/constants/statuses';
import { selectRestaurantReviewIds } from '@/redux/features/restaurant/selectors';
import { selectReviewStatus } from '@/redux/features/review/selectors';
import { fetchReviewByRestaurantId } from '@/redux/features/review/thunks/fetchReviewByRestaurantId';
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';

export const ReviewsContainer = ({ restaurantId, className }) => {
  const reviewIds = useSelector(state =>
    selectRestaurantReviewIds(state, restaurantId)
  );
  const dispatch = useDispatch();
  const status = useSelector(selectReviewStatus);

  React.useEffect(() => {
    dispatch(fetchReviewByRestaurantId(restaurantId));
  }, [dispatch, restaurantId]);

  if (!reviewIds?.length) {
    return null;
  }

  return status === STATUSES.pending ? (
    <Loader />
  ) : (
    <Reviews reviewIds={reviewIds} className={className} />
  );
};

import { Reviews } from '@/components/Reviews/Reviews';
import { reviewsActions } from '@/redux/features/reviews';
import { selectReviewsIds } from '@/redux/features/reviews/selectors';
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';

export const ReviewsContainer = ({ restaurantId, ...props }) => {
  const dispatch = useDispatch();
  dispatch(reviewsActions.setIds(restaurantId));

  const reviewsIds = useSelector(selectReviewsIds);

  if (!reviewsIds?.length) {
    return <span>Empty reviews</span>;
  }

  return <Reviews reviewsIds={reviewsIds} {...props} />;
};

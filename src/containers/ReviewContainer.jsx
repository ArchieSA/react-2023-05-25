import { Review } from '@/components/Review/Review';
import { reviewActions } from '@/redux/features/review';
import { selectReviewList } from '@/redux/features/review/selectors';
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';

export const ReviewContainer = ({ reviewId, ...props }) => {
  const dispatch = useDispatch();

  dispatch(reviewActions.setReviews(reviewId));

  const reviewList = useSelector(selectReviewList);

  let review = reviewList[reviewId];

  if (!review) {
    return null;
  }

  return <Review review={review} {...props} />;
};

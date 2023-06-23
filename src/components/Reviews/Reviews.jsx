import React from 'react';

import styles from './styles.module.scss';
import classNames from 'classnames';
import { ReviewContainer } from '@/containers/ReviewContainer';
import { NewReviewForm } from '../NewReviewForm/NewReviewForm';

/* eslint-disable react/jsx-key */
export const Reviews = ({ reviewsIds, className }) => {
  return (
    <div className={classNames(styles.root, className)}>
      <h3>Reviews</h3>
      <div className={styles.reviews}>
        {reviewsIds.map((reviewId) => (
          <ReviewContainer reviewId={reviewId} className={styles.review} />
        ))}
      </div>
      <NewReviewForm />
    </div>
  );
};

import { ReviewContainer } from '@/containers/ReviewContainer';
import classNames from 'classnames';
import styles from './styles.module.scss';

/* eslint-disable react/jsx-key */
export const Reviews = ({ reviews, className }) => {
  return (
    <div className={classNames(styles.root, className)}>
      <h3>Reviews</h3>
      <div className={styles.reviews}>
        {reviews.map(reviewId => (
          <ReviewContainer
            key={reviewId}
            reviewId={reviewId}
            className={styles.review}
          />
        ))}
      </div>
    </div>
  );
};

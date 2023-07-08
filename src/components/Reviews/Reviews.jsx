import { Review } from '@/components/Review/Review';
import classNames from 'classnames';
import styles from './styles.module.scss';

export const Reviews = ({ reviews, className }) => {
  return (
    <div className={classNames(styles.root, className)}>
      <h3>Reviews</h3>
      <div className={styles.reviews}>
        {reviews.map(review => (
          <Review key={review.id} review={review} className={styles.review} />
        ))}
      </div>
    </div>
  );
};

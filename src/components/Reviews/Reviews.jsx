import { Review } from '@/components/Review/Review';
import { Htag } from '../Htag/Htag';
import styles from './styles.module.scss';

/* eslint-disable react/jsx-key */
export const Reviews = ({ reviews }) => {
  if (!reviews?.length) {
    return <span>Empty reviews</span>;
  }

  return (
    <div>
      <Htag tag={'h3'} value={'Reviews'} />
      <ul className={styles.list}>
        {reviews.map(review => (
          <li className={styles.listItem}>
            <Review review={review} />
          </li>
        ))}
      </ul>
    </div>
  );
};

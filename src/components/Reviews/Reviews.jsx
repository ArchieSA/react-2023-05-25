import { Review } from "@/components/Review/Review";
import styles from "./styles.module.scss";

/* eslint-disable react/jsx-key */
export const Reviews = ({ reviews }) => {
  if (!reviews?.length) {
    return <span>Empty reviews</span>;
  }

  return (
    <div className={styles.root}>
      <h3 className={styles['root-title']}>Reviews</h3>
      <ul className={styles['root-list']}>
        {reviews.map((review) => (
          <li key={review.id}>
            <Review review={review} />
          </li>
        ))}
      </ul>
    </div>
  );
};

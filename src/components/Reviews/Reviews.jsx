import { Review } from "@/components/Review/Review";
import styles from "./styles.module.scss";
import classNames from "classnames";

export const Reviews = ({ reviews, users, className }) => {
  return (
    <div className={classNames(styles.root, className)}>
      <h3>Reviews</h3>
      <div className={styles.reviews}>
        {reviews.map((review) => (
          <Review key={review.id} review={review} users={users} className={styles.review} />
        ))}
      </div>
    </div>
  );
};

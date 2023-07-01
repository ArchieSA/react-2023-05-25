import styles from "./styles.module.scss";
import classNames from "classnames";
import { useGetUsersQuery } from "@/redux/services/api";
import { User } from "../User/User";

export const Review = ({ review, editReview, className }) => {
  const { data: users = [] } = useGetUsersQuery()

  if (!review) {
    return null;
  }

  const { text, userId, rating } = review;
  const user = users.find(({ id }) => id === userId)

  return (
    <div className={classNames(styles.root, className)}>
      <div className={styles.header}>
        {
          user ? <User user={user} /> : <div>Unknown user</div>
        }
        <div>{rating}</div>
      </div>
      <p>{text}</p>
      <button
        className={styles.editButton}
        onClick={() => editReview(review)}
      >
        Edit review
      </button>
    </div>
  );
};

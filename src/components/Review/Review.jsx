import { UserContainer } from '@/containers/UserContainer';
import classNames from 'classnames';
import styles from './styles.module.scss';

export const Review = ({ review, className }) => {
  const { text, userId, rating } = review;

  return (
    <div className={classNames(styles.root, className)}>
      <div className={styles.header}>
        <UserContainer userId={userId} />
        <div>{rating}</div>
      </div>
      <p>{text}</p>
    </div>
  );
};

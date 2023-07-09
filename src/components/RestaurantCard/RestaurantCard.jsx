import Link from 'next/link';
import styles from './styles.module.scss';

export const RestaurantCard = ({ restaurant }) => {
  return (
    <nav className={styles.nav}>
      <Link className={styles.navLink} href={`/restaurant/${restaurant.id}`}>
        <span>{restaurant.name}</span>
      </Link>
    </nav>
  );
};

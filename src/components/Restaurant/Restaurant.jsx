/* eslint-disable react/jsx-key */

import { MenuContainer } from '@/containers/MenuContainer';
import { ReviewsContainer } from '@/containers/ReviewsContainer';
import styles from './styles.module.scss';

export const Restaurant = ({ restaurant }) => {
  return (
    <div>
      <h2>{restaurant.name}</h2>
      <MenuContainer restaurantId={restaurant.id} className={styles.menu} />
      <ReviewsContainer
        restaurantId={restaurant.id}
        className={styles.reviews}
      />
    </div>
  );
};

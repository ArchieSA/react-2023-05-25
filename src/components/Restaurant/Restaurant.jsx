/* eslint-disable react/jsx-key */
import React from 'react';

import styles from './styles.module.scss';
import { MenuContainer } from '@/containers/MenuContainer';
import { ReviewsContainer } from '@/containers/ReviewsContainer';

export const Restaurant = ({ restaurant }) => {
  if (!restaurant) {
    return null;
  }

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

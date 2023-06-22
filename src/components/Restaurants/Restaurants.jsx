'use client';

/* eslint-disable react/jsx-key */
import { useState } from 'react';

import { RestaurantContainer } from '@/containers/RestaurantContainer';
import { RestaurantTabContainer } from '@/containers/RestaurantTabContainer';
import styles from './styles.module.scss';

export const Restaurants = ({ restaurantIds }) => {
  let [activeRestaurantId, setActiveRestaurantId] = useState(restaurantIds[0]);

  return (
    <div className={styles.root}>
      <div className={styles.filters}>
        {restaurantIds.map(id => (
          <RestaurantTabContainer
            key={id}
            restaurantId={id}
            onClick={() => setActiveRestaurantId(id)}
            className={styles.tab}
          />
        ))}
      </div>
      <RestaurantContainer restaurantId={activeRestaurantId} />
    </div>
  );
};

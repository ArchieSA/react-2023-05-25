'use client';

/* eslint-disable react/jsx-key */
import { Restaurant } from '@/components/Restaurant/Restaurant';
import React, { useEffect, useState } from 'react';

export const Restaurants = ({ restaurants }) => {
  let [activeRestaurantIndex, setActiveRestaurantIndex] = useState(0);

  useEffect(() => {
    console.log('reset');
  }, [activeRestaurantIndex]);

  return (
    <div>
      <div>
        {restaurants.map(({ name }, index) => (
          <button
            onClick={() => {
              setActiveRestaurantIndex(index);
            }}
          >
            {name}
          </button>
        ))}
      </div>
      <Restaurant restaurant={restaurants[activeRestaurantIndex]} />
    </div>
  );
};

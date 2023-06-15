'use client';

/* eslint-disable react/jsx-key */
import { Restaurant } from '@/components/Restaurant/Restaurant';
import { useDebouncedCallback } from '@/hooks/useDebounceCallback';
import { useCallback, useEffect, useMemo, useState } from 'react';
import { FormSearch } from '../FormSearch/FormSearch';
import { Tabs } from '../Tabs/Tabs';
import styles from './styles.module.scss';

export const Restaurants = ({ restaurants }) => {
  let [filteredRestaurants, setFilteredRestaurants] = useState(restaurants);
  let [activeRestaurantIndex, setActiveRestaurantIndex] = useState(0);

  const value = useMemo(
    () => ({
      byId: restaurants.reduce((acc, restaurant) => {
        acc[restaurant.id] = restaurant;
        return acc;
      }, {}),
      ids: restaurants.map(({ id }) => id),
    }),
    [restaurants]
  );

  const filterRestaurants = useCallback(
    searchValue =>
      setFilteredRestaurants(
        restaurants.filter(
          ({ name }) =>
            name.toLowerCase().indexOf(searchValue.toLowerCase()) !== -1
        )
      ),
    [restaurants]
  );

  const onChangeSearchValue = useDebouncedCallback(filterRestaurants);

  useEffect(() => {
    if (restaurants.length === 0) {
      onChangeSearchValue('');
    }
  }, [onChangeSearchValue, restaurants]);

  return (
    <section className={styles.root}>
      <div className={styles.tabsContainer}>
        <FormSearch
          onChange={event => onChangeSearchValue(event.target.value)}
        />
        <Tabs
          restaurants={filteredRestaurants}
          onSwitch={setActiveRestaurantIndex}
        />
      </div>
      {filteredRestaurants[activeRestaurantIndex] ? (
        <Restaurant restaurant={filteredRestaurants[activeRestaurantIndex]} />
      ) : (
        <span>Нету</span>
      )}
    </section>
  );
};

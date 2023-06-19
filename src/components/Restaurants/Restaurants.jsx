"use client";

import { Button } from "@/components/Button/Button";
/* eslint-disable react/jsx-key */
import { Restaurant } from "@/components/Restaurant/Restaurant";
import { useDebouncedCallback } from "@/hooks/useDebounceCallback";
import React, { useCallback, useEffect, useMemo, useState } from "react";

import styles from "./styles.module.scss";

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
    (searchValue) =>
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
      onChangeSearchValue("");
    }
  }, [onChangeSearchValue, restaurants]);

  return (
    <div className={styles.root}>
      <input
        onChange={(event) => onChangeSearchValue(event.target.value)}
        className={styles.searchFiled}
        placeholder="Введите название ресторана"
      />
      <div className={styles.filters}>
        {filteredRestaurants.map(({ name }, index) => (
          <Button
            onClick={() => {
              setActiveRestaurantIndex(index);
            }}
            className={styles.tab}
          >
            {name}
          </Button>
        ))}
      </div>
      {filteredRestaurants[activeRestaurantIndex] ? (
        <Restaurant restaurant={filteredRestaurants[activeRestaurantIndex]} />
      ) : (
        <span>Нету</span>
      )}
    </div>
  );
};

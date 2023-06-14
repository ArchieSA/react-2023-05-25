"use client";

import { useCallback, useEffect, useMemo, useState } from "react";
import { useDebouncedCallback } from "@/hooks/useDebounceCallback";
import { Restaurant } from "@/components/Restaurant/Restaurant";
import styles from "./styles.module.scss";
import classNames from "classnames";

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
    <div>
      <input
        className={styles.restaurants__search}
        placeholder="Введите название ресторана"
        onChange={(event) => onChangeSearchValue(event.target.value)}
      />

      <div>
        {filteredRestaurants.map(({ name, id }, index) => (
          <button
            key={id}
            className={classNames(
              styles.restaurants__tab,
              {
                [styles.restaurants__selected]: activeRestaurantIndex === index,
              },
            )}
            onClick={() => setActiveRestaurantIndex(index)}
          >
            {name}
          </button>
        ))}
      </div>
      {filteredRestaurants[activeRestaurantIndex] ? (
        <Restaurant restaurant={filteredRestaurants[activeRestaurantIndex]} />
      ) : (
        <span>Не найден запрашиваемый ресторан</span>
      )}
    </div>
  );
};

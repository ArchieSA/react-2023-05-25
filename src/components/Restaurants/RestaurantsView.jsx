"use client";

import React, { useState, useMemo, useCallback } from "react";
import debounce from "lodash/debounce";
import { Tabs } from "./components/Tabs/Tabs";
import { Restaurant } from "./components/Restaurant/Restaurant";
import s from "./styles.module.css";

const INITIAL = {};
const OPTIONS = { maxWait: 2000, trailing: true, leading: false };

export const RestaurantsView = ({ restaurants }) => {
  const [{ activeRestaurantIndex, filter }, setState] = useState(INITIAL);
  const visibleRestaurants = useMemo(
    () =>
      restaurants.filter(
        ({ name }) => !filter || name.toUpperCase().indexOf(filter) > -1
      ),
    [filter, restaurants]
  );

  const setActiveIndex = useCallback(
    (index) => setState(({ filter }) => ({ filter, activeRestaurantIndex: index })),
    []
  );

  const debouncedFiltering = useMemo(
    () =>
      debounce(
        (value) =>
          setState({
            activeRestaurantIndex: undefined,
            filter: value?.toUpperCase(),
          }),
        1500,
        OPTIONS
      ),
    []
  );
  const setFilter = useCallback((ev) => {
    debouncedFiltering.cancel()
    debouncedFiltering(ev.target.value);
  }, [debouncedFiltering]);

  return (
    <div>
      <div className={s.filter}>
        <input type="text" placeholder="поиск ресторана" onChange={setFilter} />
      </div>
      <Tabs
        objects={visibleRestaurants}
        activeIndex={activeRestaurantIndex}
        onChangeActive={setActiveIndex}
        viewItemComponent={Restaurant}
      />
    </div>
  );
};

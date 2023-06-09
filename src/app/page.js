"use client";

import React, { useState, useCallback } from "react";
import { restaurants } from "@/mocks";
import Restaurants, { selectRestaurant } from "@/components/Restaurants/Restaurants";
import { Search } from '@/components/Search/Search';

export default function Home() {
  const [ searchText, setSearchText ] = useState('');
  const [ filteredRestaurants, setFilteredRestaurants ] = useState([...restaurants]);

  const changeSearchText = useCallback((val = '') => {
    setSearchText(val);

    const _filteredRestaurants = !val
      ? restaurants
      : restaurants
        .reduce((res, restaurant) => {
          const { name = '' } = restaurant
          if (name.toLowerCase().includes(val.toLowerCase())) {
            const textIndex = name.toLowerCase().indexOf(val.toLowerCase())
            const newName = `${name.substring(0, textIndex)}<u>${name.substring(textIndex, textIndex + val.length)}</u>${name.substring(textIndex + val.length)}`
            res.push({
              ...restaurant,
              name: newName,
            })
          }

          return res
        }, [])

    selectRestaurant(0);
    setFilteredRestaurants([..._filteredRestaurants]);
  }, []);

  return (
    <React.Fragment>
      <Search
        text={searchText}
        placeholder="Введите название ресторана"
        onChange={changeSearchText}
      />

      {
        filteredRestaurants.length
        ? <Restaurants restaurants={filteredRestaurants} />
        : <div><i>Не найдены рестораны, соответствующие запросу</i></div>
      }
    </React.Fragment>
  );
}

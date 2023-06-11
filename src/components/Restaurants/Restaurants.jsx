"use client";

/* eslint-disable react/jsx-key */
import { Restaurant } from "@/components/Restaurant/Restaurant";
import React, { useEffect, useState } from "react";
import { Search } from "@/components/Search/Search";

export const Restaurants = ({ restaurants }) => {
  let [activeRestaurantIndex, setActiveRestaurantIndex] = useState(null); // передал null чтобы при инициализации не отображались рестораны
  let [findRestaurants, setFindRestaurants] = useState(restaurants);

  useEffect(() => {
    console.log("reset");
  }, [activeRestaurantIndex]);


  //массив с ресторанами проходит через компонент поиска и возвращает измененный согласно поиску новый массив
  //уже по нему отрисовываются компоненты
  return (
    <div>
      <Search restaurants={restaurants} findRestaurants={(findRestaurants) => setFindRestaurants(findRestaurants)}/>
      <div>
        {findRestaurants.map(({ name }, index) => (
          <button
            onClick={() => {
              setActiveRestaurantIndex(index);
            }}
          >
            {name}
          </button>
        ))}
      </div>
      <Restaurant restaurant={findRestaurants[activeRestaurantIndex]} />
    </div>
  );
};

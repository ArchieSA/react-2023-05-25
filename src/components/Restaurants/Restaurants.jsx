"use client";
import React, { useEffect, useState } from "react";
import { Restaurant } from "@/components/Restaurant/Restaurant";
import { SearchInput } from "@/components/InputText/InputText";

export const Restaurants = ({ restaurants }) => {
  const [searchValue, setSearchValue] = useState(''); 
  const [activeRestaurantIndex, setActiveRestaurantIndex] = useState(0);
  const [filteredRestaurants, setRestaurants] = useState(() => restaurants);

  useEffect(() => {
    setRestaurants(
      restaurants.filter(
        ({ name }) => name.toLowerCase().startsWith(searchValue.toLowerCase())
      )
    )
  }, [restaurants, searchValue])

  return (
    <div>
      <SearchInput 
        initialValue={searchValue} 
        onChange={setSearchValue} 
      />
    
      <div>
        {!filteredRestaurants?.length && <span>Empty List</span>}
        
        {
          filteredRestaurants.map(({ name, id }, index) => (
            <button
              key={id}
              onClick={() => {
                setActiveRestaurantIndex(index);
              }}
            >
              {name}
            </button>
          ))
        }
      </div>
      {
        filteredRestaurants[activeRestaurantIndex] 
        && <Restaurant restaurant={filteredRestaurants[activeRestaurantIndex]} />
      }
    </div>
  );
};

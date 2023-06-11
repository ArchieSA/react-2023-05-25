"use client";

/* eslint-disable react/jsx-key */
import { Restaurant } from "@/components/Restaurant/Restaurant";
import React, { useEffect, useState } from "react";



export const Restaurants = ({ restaurants }) => {
  let [activeRestaurantIndex, setActiveRestaurantIndex] = useState(0);

  let [searchText, setSearchText] = useState("");

  let [searchTimeout, setSearchTimeout] = useState(null);

  const searchRestaurant = (searchText) => {

    if(!searchText?.length)
      return;
       
    let index = restaurants.map((({name})=> name.toLowerCase())).findIndex((name)=> name.startsWith(searchText.toLowerCase()));

    setActiveRestaurantIndex(index != -1? index : activeRestaurantIndex);
  };


  useEffect(()=>{  
    if(searchTimeout !== null) 
      clearTimeout(searchTimeout);       
    
    setSearchTimeout(setTimeout(()=> { searchRestaurant(searchText);}, 2000))

  },
  [searchText]);

  // useEffect(() => {
  //   console.log("reset");
  // }, [activeRestaurantIndex]);

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
      <div>
        <input type="text" value={searchText} onChange={(event) => setSearchText(event.target.value)}/>
      </div>
      <Restaurant restaurant={restaurants[activeRestaurantIndex]} />
    </div>
  );
};

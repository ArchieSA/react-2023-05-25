import { Menu } from "@/components/Menu/Menu";
import React from "react";
import { Review } from "@/components/Review/Review";

export const Restaurant = ({ restaurants }) => {
  if (!restaurants?.length) {
    return <span>Empty Restaurants</span>;
  }

  return (
    <div>
      <h3>Restaurants</h3>
      <ul>
        {restaurants.map((restaurant) => (
          <li>
           <h3>{restaurant.name}</h3>
           <Menu menu={restaurant.menu} />
           <Review reviews={restaurant.reviews} />
          </li>
        ))}
      </ul>
    </div>
  );
};

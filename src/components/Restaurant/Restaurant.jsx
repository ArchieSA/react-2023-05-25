// import { Dish } from "@/components/Dish/Dish";
import React from "react";
import { Menu } from "../Menu/Menu";
import { Review } from "../Review/Review";

/* eslint-disable react/jsx-key */
export const Restaurant = ({ restaurant }) => {
  if (!restaurant?.menu) {
    return <span>{restaurant.name} has no menu</span>;
  }

  return (
    <div>
      <h3>Restaurant</h3>
      <span>{restaurant.name}</span>
      <ul>
          <li>
            <Menu menu={restaurant.menu} />
          </li>
      </ul>

      <h3>Reviews</h3>
      <ul>
          <li>
            <Review review={restaurant.reviews} />
          </li>
      </ul>
    </div>
  );
};

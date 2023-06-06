import React from "react";
import { Restaurant } from "../Restaurant/Restaurant";

export const RestaurantsList = ({ restaurants }) => {
  if (!restaurants?.length) {
    return <span>No Restaurants</span>;
  }

  return (
    <>
      {restaurants.map(({ id, name, menu, reviews }) => (
        <Restaurant key={id} name={name} menu={menu} reviews={reviews} />
      ))}
    </>
  );
};

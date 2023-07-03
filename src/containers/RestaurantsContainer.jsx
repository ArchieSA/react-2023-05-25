import { Restaurants } from "@/components/Restaurants/Restaurants";
import { useGetRestaurantsQuery } from "@/redux/services/api";
import React from "react";

export const RestaurantsContainer = () => {
  return (
    <div>
      <Restaurants />
    </div>
  );
};

/* eslint-disable react/jsx-key */
import { RestaurantCard } from "@/components/RestaurantCard/RestaurantCard";
import { fetchRestaurants } from "@/services";
import React from "react";

export default async function RestaurantsPage() {
  const restaurants = await fetchRestaurants();

  return (
    <div>
      {restaurants.map((restaurant) => (
        <RestaurantCard key={restaurant.id} restaurant={restaurant} />
      ))}
    </div>
  );
}

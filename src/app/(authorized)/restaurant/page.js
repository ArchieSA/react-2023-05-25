import { RestaurantCard } from "@/components/RestaurantCard/RestaurantCard";
import { fetchRestaurants } from "@/services";
import React from "react";

export const metadata = {
  title: "Restaurants",
};

export default async function RestaurantsPage() {
  const restaurants = await fetchRestaurants();

  return (
    <div>
      {restaurants.map((restaurant, index) => (
        <RestaurantCard key={index} restaurant={restaurant} />
      ))}
    </div>
  );
}

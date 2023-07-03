/* eslint-disable react/jsx-key */
import { Tab } from "@/components/Tab/Tab";
import { useGetRestaurantsQuery } from "@/redux/services/api";
import React from "react";

export const RestaurantsTabContainer = ({ onClick }) => {
  const { data: restaurants, isLoading } = useGetRestaurantsQuery();

  if (isLoading) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      {restaurants.map((restaurant) => (
        <Tab title={restaurant.name} onClick={() => onClick(restaurant)} />
      ))}
    </div>
  );
};

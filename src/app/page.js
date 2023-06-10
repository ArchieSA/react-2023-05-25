/* eslint-disable react/jsx-key */
/* eslint-disable react/no-children-prop */
import React from "react";
import { restaurants } from "@/mocks";
import { Restaurant } from "@/components/Restaraunt/Restaurant";

export default function Home() {
  if (!restaurants?.length) {
    return <span>No restaurants :(</span>;
  }

  return (
    <div>
      {restaurants.map((restaurant) => (
        <Restaurant restaurant={restaurant} />
      ))}
    </div>
  );
}

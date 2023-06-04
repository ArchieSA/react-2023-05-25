/* eslint-disable react/jsx-key */
/* eslint-disable react/no-children-prop */
import React from "react";
import { restaurants } from "@/mocks";
import { Restaurant } from "@/components/Restaurant/Restaurant";

export default function Home() {

  return (
    <div>
      {/* Отрисовываем рестораны здесь */}
      <h2>Restaurants</h2>
      <ul>
        {restaurants.map((restaurant) => (
          <li><Restaurant restaurant={restaurant} /></li>
        ))}
      </ul>
    </div>
  );
}

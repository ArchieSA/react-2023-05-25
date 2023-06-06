/* eslint-disable react/jsx-key */
/* eslint-disable react/no-children-prop */
import React from "react";
import { restaurants } from "@/mocks";
import { Restaurant } from "@/components/Restaurant/Restaurant";
import { RestaurantsList } from "@/components/RestaurantsList/RestaurantsList";

export default function Home() {
  if (!restaurants?.length){
    return <span>No Restaurants</span>
  }

  return (
    <div>
      {/* Отрисовываем рестораны здесь */}
      <RestaurantsList restaurants={restaurants}/>
    </div>
  );
}

import React from "react";
import { restaurants } from "@/mocks";
import { Restaurant } from '@/components/Restaurant/Restaurant';
import { Restaurants } from "@/components/Restaurants/Restaurants";

export default function Home() {
  return (
    <div>
      <Restaurants restaurants={restaurants}>
        {restaurant => <Restaurant restaurant={restaurant} />}
      </Restaurants>
    </div>
  )
}

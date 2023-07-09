import { DishesInRestaurants } from "@/components/DishesInRestaurants/DishesInRestaurants";
import { fetchDishes } from "@/services";
import React from "react";

export default async function DishesPage() {

  const dishes = await fetchDishes();
  if(!dishes.length) {
    return null
  }
  return (
    <div>
        {dishes.map((dish) => 
            <DishesInRestaurants key={dish.id} dish={dish}/>
        )}
    </div>
  )
}
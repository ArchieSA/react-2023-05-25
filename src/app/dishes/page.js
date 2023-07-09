import { DishCard } from "@/components/DishCard/DishCard";
import { fetchAllDishes } from "@/services";
import React from "react";

export default async function DishesPage() {
  const dishes = await fetchAllDishes();

  return (
    <div>
      {dishes.map((dish) => (
        <DishCard key={dish.id} dish={dish} />
      ))}
    </div>
  );
}

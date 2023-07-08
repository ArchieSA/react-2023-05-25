/* eslint-disable react/jsx-key */
import { DishesCard } from "@/components/DishesCard/DishesCard";
import { fetchDishesAll } from "@/services";

export default async function DishesPage() {
    const dishes = await fetchDishesAll();
  
    return (
      <div>
        {dishes.map((dishes) => (
            <DishesCard dishes={dishes} />
        ))}
      </div>
    );
  }
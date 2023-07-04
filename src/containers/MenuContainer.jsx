import { Menu } from "@/components/Menu/Menu";
import { fetchDishes } from "@/services";
import React from "react";

export async function MenuContainer({ restaurantId, className }) {
  const dishes = await fetchDishes(restaurantId);

  if (!dishes?.length) {
    return null;
  }

  return <Menu dishes={dishes} className={className} />;
}

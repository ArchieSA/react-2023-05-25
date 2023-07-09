import Link from "next/link";
import React from "react";

export const DishesInRestaurants = ({ dish }) => {
  return (
    <div>
      <Link href={`dishes/${dish.id}`}>
        <div>{dish.name}</div>
      </Link>
    </div>
  );
};

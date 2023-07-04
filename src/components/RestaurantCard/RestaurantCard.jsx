import Link from "next/link";
import React from "react";

export const RestaurantCard = ({ restaurant }) => {
  return (
    <div>
      <Link href={`/restaurant/${restaurant.id}`}>
        <div>{restaurant.name}</div>
      </Link>
    </div>
  );
};

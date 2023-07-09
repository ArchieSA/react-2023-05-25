import Link from "next/link";
import React from "react";

export const DishCard = ({ dish }) => {
  return (
    <div>
      <Link href={`/dishes/${dish.id}`}>
        <div>{dish.name}</div>
      </Link>
    </div>
  );
};

import Link from "next/link";
import React from "react";

export const DishesCard = ({ dishes }) => {
  return (
    <div>
      <Link href={`/dishes/${dishes.id}`}>
        <div>{dishes.name}</div>
      </Link>
    </div>
  );
};
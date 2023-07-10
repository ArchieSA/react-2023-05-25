import Link from "next/link";
import React from "react";

export const Preview = () => {
  return (
    <div>
      <Link href={`/restaurant`}>
        <h2>Restaurants</h2>
      </Link>
      <Link href={`/dishes`}>
        <h2>Dishes</h2>
      </Link>
    </div>
  );
};

"use client";

import { useEffect } from "react";

export default function RestaurantError({ error, reset }) {
  useEffect(() => {
    console.error("error", error);
  }, [error]);

  return (
    <div>
      <button onClick={reset}>reset</button>
    </div>
  );
}

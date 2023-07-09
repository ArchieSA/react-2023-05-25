"use client";

import { useEffect } from "react";

export default function DishError({ error, reset }) {
  useEffect(() => {
    console.error("error", error);
  }, [error]);

  return (
    <div>
      <button onClick={reset}>reset</button>
    </div>
  );
}

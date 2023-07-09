"use client";

import { useEffect } from "react";

export function Error({ error, reset }) {
  useEffect(() => {
    console.error("error", error);
  }, [error]);

  return (
    <div>
      {String(error)}
      <button onClick={reset}>reset</button>
    </div>
  );
}

"use client";

import SlowComponent from "@/app/(examples)/components/SlowComponent/component";
import { useState } from "react";

const Counter = () => {
  const [count, setCount] = useState(0);

  return <button onClick={() => setCount(count + 1)}>{count}</button>;
};

export default function StateLocation() {
  return (
    <div>
      <Counter />
      <SlowComponent />
    </div>
  );
}

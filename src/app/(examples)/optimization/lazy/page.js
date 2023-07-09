"use client";

import dynamic from "next/dynamic";
import { useState } from "react";

const FirstSlowComponent = dynamic(
  () =>
    import("@/components/examples/first-component").then(
      (mod) => mod.FirstComponent
    ),
  { ssr: false, loading: () => <span>Loading...</span> }
);

const SecondSlowComponent = dynamic(
  () =>
    import("@/components/examples/second-component").then(
      (mod) => mod.SecondComponent
    ),
  { ssr: false, loading: () => <span>Loading...</span> }
);

export default function Lazy() {
  const [count, setCount] = useState(0);
  return (
    <div>
      <button onClick={() => setCount(count + 1)}>{count}</button>
      {count > 0 && (
        <FirstSlowComponent>
          <div>Hello</div>
        </FirstSlowComponent>
      )}
      {count > 1 && <SecondSlowComponent />}
    </div>
  );
}

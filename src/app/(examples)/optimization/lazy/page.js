"use client";

import dynamic from "next/dynamic";
import { Suspense, lazy, useState } from "react";

const FirstSlowComponent = dynamic(
  () =>
    import("@/components/examples/first-component").then(
      (mod) => mod.FirstComponent
    ),
  { ssr: false, loading: () => <span>Loading...</span> }
);

const SecondSlowComponent = lazy(
  () =>
    import("@/components/examples/second-component")
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
      <Suspense fallback={<div>Loading...</div>}>
        {count > 0 && <SecondSlowComponent/>}
      </Suspense>
    </div>
  );
}

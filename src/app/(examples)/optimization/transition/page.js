"use client";

import SlowComponent from "@/app/(examples)/components/SlowComponent/component";
import { useState, useTransition } from "react";

export default function Transition() {
  const [isVisible, setIsVisible] = useState(false);
  console.log(isVisible);
  const [isPending, startTransition] = useTransition();
  return <div>
    <button onClick={() => {
      startTransition(() => setIsVisible(!isVisible))}}>changeVisibility</button>
      {isPending && <div>Loading</div>}
    {isVisible && <SlowComponent/>}
  </div>;
}

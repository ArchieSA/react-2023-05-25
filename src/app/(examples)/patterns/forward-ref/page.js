"use client";

import { Button } from "@/components/Button/Button";
import { useRef } from "react";

export default function ForwardRef() {
  const ref = useRef();

  return <Button ref={ref} />;
}

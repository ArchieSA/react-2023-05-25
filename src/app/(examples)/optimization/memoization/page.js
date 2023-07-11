"use client";

import SlowComponent from "@/app/(examples)/components/SlowComponent/component";
import React, { useState } from "react";

const SlowMemo = React.memo(SlowComponent);

export default function Memoization() {
  return (
    <div>
      <SlowMemo />
    </div>
  );
}

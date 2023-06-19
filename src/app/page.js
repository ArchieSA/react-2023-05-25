/* eslint-disable react/jsx-key */
/* eslint-disable react/no-children-prop */
"use client";

import React from "react";
import { restaurants } from "@/mocks";
import { Restaurants } from "@/components/Restaurants/Restaurants";

export default function Home() {
  return <Restaurants restaurants={restaurants} />;
}

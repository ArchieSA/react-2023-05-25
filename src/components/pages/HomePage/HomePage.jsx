"use client";
/* eslint-disable react/no-children-prop */


import React from "react";
import { restaurants } from "@/mocks";
import { Restaurants } from "@/components/Restaurants/Restaurants";

export default function HomePage() {
  return <Restaurants restaurants={restaurants} />;
}

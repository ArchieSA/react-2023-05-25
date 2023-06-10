/* eslint-disable react/jsx-key */
/* eslint-disable react/no-children-prop */
import React from "react";
import { restaurants } from "@/mocks";
import { RestaurantsView } from "@/components/Restaurants/RestaurantsView";

export default function Home() {
  return <RestaurantsView restaurants={restaurants} />;
}

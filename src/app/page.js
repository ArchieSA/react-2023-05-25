/* eslint-disable react/jsx-key */
/* eslint-disable react/no-children-prop */
import React from "react";
import { restaurants } from "@/mocks";
import { Restaurants } from "@/components/Restaurants/Restaurants";

export default function Home() {
  //const { name, menu, reviews } = restaurants[0];

  return (
    <Restaurants restaurants={restaurants} />
  );
}

/* eslint-disable react/jsx-key */
/* eslint-disable react/no-children-prop */
import React from "react";
import { restaurants } from "@/mocks";
import { Restaurant } from "@/components/Restaurant/Restaurant";


export default function Home() {

  return (
    <div>
      {/* Отрисовываем рестораны здесь */}

      {restaurants.map((rest) => (
          <Restaurant restaurant={rest} />
      ))}

    </div>
  );
}

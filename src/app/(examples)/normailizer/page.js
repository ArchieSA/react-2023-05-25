"use client";

import { Button } from "@/components/Button/Button";
import { restaurants } from "@/constants/fixtures";
import { normalize, schema } from "normalizr";
import { useEffect, useRef } from "react";

export default function Normalizer() {
  useEffect(() => {
    console.log(restaurants);
    const dish = new schema.Entity("dish");
    const review = new schema.Entity("review");
    const restaurant = new schema.Entity("restaurant", {
      menu: [dish],
      reviews: [review],
    });
    console.log(normalize(restaurants, [restaurant]));
  }, []);

  return <div>Normalizer</div>;
}

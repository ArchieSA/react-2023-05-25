/* eslint-disable react/jsx-key */
import { Menu } from "@/components/Menu/Menu";
import { NewReviewForm } from "@/components/NewReviewForm/NewReviewForm";
import { Reviews } from "@/components/Reviews/Reviews";
import React from "react";

export const Restaurant = ({ restaurant }) => {
  if (!restaurant) {
    return null;
  }

  const { name, menu, reviews } = restaurant;

  return (
    <div>
      <h2>{name}</h2>
      <Menu menu={menu} />
      <Reviews reviews={reviews} />
      <NewReviewForm />
    </div>
  );
};

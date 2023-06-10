import React, { memo } from "react";
import { Menu } from "./components/Menu/Menu";
import { ReviewForm } from "@/components/ReviewForm/ReviewForm";
import { Reviews } from "./components/Reviews/Reviews";
import { RestaurantProvider } from "./contexts/RestaurantContext";

const RestaurantInner = memo(({ name, menu, reviews }) => (
  <div>
    <h2>{name}</h2>
    <Menu menu={menu} />
    <Reviews reviews={reviews} />
    <ReviewForm />
  </div>
));

RestaurantInner.displayName = "RestaurantInner";

export const Restaurant = (props) => (
  <RestaurantProvider restaurantId={props.id}>
    <RestaurantInner {...props} />
  </RestaurantProvider>
);

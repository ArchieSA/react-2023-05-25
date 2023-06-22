import { configureStore } from "@reduxjs/toolkit";

import { cartReducer } from "@/redux/features/cart";
import { restaurantReducer } from "@/redux/features/restaurant";
import { reviewsReducer } from "@/redux/features/reviews";
import { usersReducer } from "@/redux/features/users";
import { dishesReducer } from "@/redux/features/dishes";

export const store = configureStore({
  reducer: {
    cart: cartReducer,
    restaurant: restaurantReducer,
    reviews: reviewsReducer,
    users: usersReducer,
    dishes: dishesReducer,
  },
});

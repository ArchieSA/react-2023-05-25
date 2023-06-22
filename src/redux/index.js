import { cartReducer } from "@/redux/features/cart";
import { restaurantReducer } from "@/redux/features/restaurant";
import { configureStore } from "@reduxjs/toolkit";
import { dishReduser } from "./features/dishes";
import { reviewReduser } from "./features/review";
import { userReduser } from "./features/users";

export const store = configureStore({
  reducer: {
    cart: cartReducer,
    restaurant: restaurantReducer,
    dish: dishReduser,
    review: reviewReduser,
    user: userReduser
  },
});

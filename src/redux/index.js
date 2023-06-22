import { cartReducer } from "@/redux/features/cart";
import { restaurantReducer } from "@/redux/features/restaurant";
import { configureStore } from "@reduxjs/toolkit";
import { reviewReducer } from "./features/review";
import { dishReducer } from "./features/dish";
import { userReducer } from "./features/user";

export const store = configureStore({
  reducer: {
    cart: cartReducer,
    restaurant: restaurantReducer,
    review: reviewReducer,
    dish: dishReducer,
    user: userReducer
  },
});

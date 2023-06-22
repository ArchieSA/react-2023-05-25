import { configureStore } from "@reduxjs/toolkit";
import { cartReducer } from "@/redux/features/cart";

import { restaurantReducer } from "./features/restaurant";
import { dishReducer } from "./features/dishes";
import { reviewReducer } from "./features/reivew";
import { userReducer } from "./features/users";

export const store = configureStore({
  reducer: {
    cart: cartReducer,
    restaurant: restaurantReducer,
    dish: dishReducer,
    review: reviewReducer,
    user: userReducer,
  },
});

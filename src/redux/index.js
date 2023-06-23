import { cartReducer } from "@/redux/features/cart";
import { restaurantReducer } from "@/redux/features/restaurant";
import { configureStore } from "@reduxjs/toolkit";
import { reviewReducer } from "./features/review";
import { menuReducer } from "./features/menu";
import { userReducer } from "./features/users";

export const store = configureStore({
  reducer: {
    cart: cartReducer,
    restaurant: restaurantReducer,
    reviews: reviewReducer,
    menu: menuReducer,
    users: userReducer,
  },
});

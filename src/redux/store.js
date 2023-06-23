import { configureStore } from "@reduxjs/toolkit";
import { cartReducer } from "./features/cart";
import { restaurantReducer } from "./features/restaurant";
import { dishReducer } from './features/dish'
import { reviewReducer } from './features/review'
import { userReducer } from './features/user'

export const store = configureStore({
  reducer: {
    cart: cartReducer,
    restaurant: restaurantReducer,
    dish: dishReducer,
    review: reviewReducer,
    user: userReducer,
  },
});

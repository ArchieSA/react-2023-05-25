import { cartReducer } from "@/redux/features/cart";
import { dishReducer } from "@/redux/features/dish";
import { requestReducer } from "@/redux/features/request";
import { restaurantReducer } from "@/redux/features/restaurant";
import { reviewReducer } from "@/redux/features/review";
import { userReducer } from "@/redux/features/user";
import { logger } from "@/redux/middlewares/logger";
import { api } from "@/redux/services/api";
import { configureStore } from "@reduxjs/toolkit";

export const store = configureStore({
  reducer: {
    cart: cartReducer,
    restaurant: restaurantReducer,
    dish: dishReducer,
    user: userReducer,
    review: reviewReducer,
    request: requestReducer,
    [api.reducerPath]: api.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat([api.middleware]),
});

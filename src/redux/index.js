import { cartReducer } from '@/redux/features/cart';
import { restaurantReducer } from '@/redux/features/restaurant';
import { configureStore } from '@reduxjs/toolkit';
import { dishReducer } from './features/dish';
import { reviewReducer } from './features/review';
import { userReducer } from './features/user';

export const store = configureStore({
  reducer: {
    cart: cartReducer,
    restaurant: restaurantReducer,
    dish: dishReducer,
    user: userReducer,
    review: reviewReducer,
  },
});

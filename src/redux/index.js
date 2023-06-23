import { dishReducer } from '@/redux/features/dish';
import { restaurantReducer } from '@/redux/features/restaurant';
import { menuReducer } from '@/redux/features/menu';
import { reviewsReducer } from '@/redux/features/reviews';
import { reviewReducer } from '@/redux/features/review';
import { configureStore } from '@reduxjs/toolkit';

export const store = configureStore({
  reducer: {
    restaurant: restaurantReducer,
    menu: menuReducer,
    dish: dishReducer,
    reviews: reviewsReducer,
    review: reviewReducer,
  },
});

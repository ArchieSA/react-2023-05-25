import { STATUSES } from '@/constants/statuses';
import { isMatch } from '@/utils';
import { createAsyncThunk } from '@reduxjs/toolkit';
import { selectRestaurantReviewIds } from '../../restaurant/selectors';
import { selectReviewIds } from '../selectors';

export const fetchReviewByRestaurantId = createAsyncThunk(
  'review/fetchReviewByRestaurantId ',
  async (restaurantId, { rejectWithValue, getState }) => {
    const state = getState();
    const review = selectRestaurantReviewIds(state, restaurantId);
    const reviewIds = selectReviewIds(state);

    if (isMatch(review, reviewIds)) {
      return rejectWithValue(STATUSES.alreadyLoaded);
    }

    //Q:Привет! Не корректно работает первый выбор ресторана, грузит сразу все меню. Почему?
    const responce = await fetch(
      `http://localhost:3001/api/reviews?restaurantId=${restaurantId}/`
    );
    const reviews = await responce.json();
    return reviews;
  }
);

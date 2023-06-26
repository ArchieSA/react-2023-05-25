import { STATUSES } from '@/constants/statuses';
import { isMatch } from '@/utils';
import { createAsyncThunk } from '@reduxjs/toolkit';
import { selectRestaurantDishIds } from '../../restaurant/selectors';
import { selectDishIds } from '../selectors';

export const fetchDishByRestaurantId = createAsyncThunk(
  'dish/fetchDishByRestaurantId',
  async (restaurantId, { rejectWithValue, getState }) => {
    const state = getState();
    const menu = selectRestaurantDishIds(state, restaurantId);
    const dishIds = selectDishIds(state);
    if (isMatch(menu, dishIds)) {
      return rejectWithValue(STATUSES.alreadyLoaded);
    }

    const responce = await fetch(
      `http://localhost:3001/api/dishes?restaurantId=${restaurantId}/`
    );
    const dishes = await responce.json();
    return dishes;
  }
);

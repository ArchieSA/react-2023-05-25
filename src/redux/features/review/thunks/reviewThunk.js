import { STATUSES } from "@/constants/statuses";
import { createAsyncThunk } from "@reduxjs/toolkit";
import { selectDishVisit } from "../../dish/selectors";

export const reviewThunk = createAsyncThunk(
  "review/reviewThunk",
  async (id, { rejectWithValue, getState }) => {
    const state = getState();

    // не нашел способа как можно отследит сработал соседний санк или нет, можно было бы убрать проверку
    // (не делал доп поле в отзывах, проверяю по соседнему слайсу блюд)
    if (!selectDishVisit(state).includes(id)) {
      const response = await fetch(`http://localhost:3001/api/reviews?restaurantId=${id}`);
      const reviews = await response.json();
  
      return reviews
    } else {
      return rejectWithValue(STATUSES.alreadyLoaded);
    }
  }
);

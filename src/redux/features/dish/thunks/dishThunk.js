import { STATUSES } from "@/constants/statuses";
import { createAsyncThunk } from "@reduxjs/toolkit";
import { selectDishIds, selectDishVisit } from "../selectors";

export const dishThunk = createAsyncThunk(
  "dish/dishThunk",
  async (id, { rejectWithValue, getState }) => {
    const state = getState();

    // сделал доп поле в стейте блюд и проверяю входил ли в них раньше чтобы не запрашивать лишний раз
    if (!selectDishVisit(state).includes(id)) {
      const response = await fetch(`http://localhost:3001/api/dishes?restaurantId=${id}`);
      const dishes = await response.json();

      // возможно есть другой способ передать чтото в пейлоад фулфилда
      return { dishes: dishes, id: id };
    } else {
      return rejectWithValue(STATUSES.alreadyLoaded);
    }
  }
);

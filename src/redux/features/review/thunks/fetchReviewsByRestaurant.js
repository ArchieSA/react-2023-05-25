import { createAsyncThunk } from "@reduxjs/toolkit";
import { safeGet } from "../../../utils"
import { MODULE_NAME } from '../const'

export const fetchReviewsByRestaurant = createAsyncThunk(
  `${MODULE_NAME}/fetchReviewsByRestaurant`,

  async ({ restaurantId }) => {
    return safeGet("http://localhost:3001/api/reviews/", { restaurantId })
  }
);

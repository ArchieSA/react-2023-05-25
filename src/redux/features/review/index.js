import { normalizedReviews } from "@/mocks/normalized-fixtures";

const { createSlice } = require("@reduxjs/toolkit");

const initialState = {
    entities: normalizedReviews.reduce((acc, reviews) => {
        acc[reviews.id] = reviews;
    
        return acc;
      }, {}),
      ids: normalizedReviews.map(({ id }) => id),
}
const reviewsSlice = createSlice({
    name: 'reviews',
    initialState,
})

export const reviewReducer = reviewsSlice.reducer
export const reviewAction = reviewsSlice.actions
const { normalizedReviews } = require('@/mocks/normalized-fixtures');
const { createSlice } = require('@reduxjs/toolkit');

const initialState = {
  entities: normalizedReviews.reduce((acc, review) => {
    acc[review.id] = review;
    return acc;
  }, {}),

  ids: normalizedReviews.map(({ id }) => id),
};

const reviewSlice = createSlice({
  name: 'review',
  initialState,
});

export const reviewReducer = reviewSlice.reducer;

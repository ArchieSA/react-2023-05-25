import { createAsyncThunk } from "@reduxjs/toolkit";

export const createNewReview = createAsyncThunk(
  "review/createNewReview",
  async ({ restaurantId, newReview }) => {
    const response = await fetch(
      `http://localhost:3001/api/review/${restaurantId}`,
      {
        method: "POST",
        headers: {
          "Content-type": "application/json;charset=utf-8",
        },
        body: JSON.stringify(newReview),
      }
    );

    const review = await response.json();

    return {
      restaurantId,
      review,
    };
  }
);

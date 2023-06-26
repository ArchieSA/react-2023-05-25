import { createAsyncThunk } from "@reduxjs/toolkit";

export const fetchReview = createAsyncThunk(
    'review/fetchReview',
    async(restaurantId) => {
        const response = await fetch(`http://localhost:3001/api/reviews?restaurantId=${restaurantId}`)
        const review = await response.json()
        return review
    }
)
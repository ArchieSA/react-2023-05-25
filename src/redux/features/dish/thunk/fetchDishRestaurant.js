import { createAsyncThunk } from "@reduxjs/toolkit";

export const fetchDishRestaurant = createAsyncThunk(
    'dish/fetchDishRestaurant',
    async(restaurantId, {rejectWithValue }) => {
        if(!restaurantId) {
            return rejectWithValue("Ошибка");
        }
        const response = await fetch(`http://localhost:3001/api/dishes?restaurantId=${restaurantId}`)
        const dishes = await response.json()
        return dishes
    }
)
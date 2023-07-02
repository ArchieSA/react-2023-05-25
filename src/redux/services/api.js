import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const api = createApi({
  reducerPath: "api",
  tagTypes: ["Restaurant", "Dish", "Review", "User"],
  baseQuery: fetchBaseQuery({ baseUrl: "http://localhost:3001/api/" }),
  endpoints: (builder) => ({
    getRestaurants: builder.query({
      query: () => ({
        url: "restaurants",
      }),
      providesTags: (result) =>
        (result || []).map(({ id }) => ({ type: "Restaurant", id })),
    }),
    getReviews: builder.query({
      query: (restaurantId) => ({
        url: "reviews",
        params: {
          restaurantId,
        },
      }),
      providesTags: (result) =>
        (result || [])
          .map(({ id }) => ({ type: "Review", id }))
          .concat({ type: "Review", id: "LIST" }),
    }),
    getMenu: builder.query({
      query: (restaurantId) => ({
        url: "dishes",
        params: {
          restaurantId
        }
      }),
      providesTags: (result) =>
        (result || []).map(({ id }) => ({ type: "Dish", id })),
    }),
    getUsers: builder.query({
      query: () => ({
        url: "users"
      }),
      providesTags: (result) =>
        (result || []).map(({ id }) => ({ type: "User", id })),
    }),
    updateReview: builder.mutation({
      query: ({ reviewId, newReview }) => ({
        url: `review/${reviewId}`,
        method: "PATCH",
        body: newReview,
      }),
      invalidatesTags: (result) => [{ type: "Review", id: result.id }],
    }),
    createReview: builder.mutation({
      query: ({ restaurantId, newReview }) => ({
        url: `review/${restaurantId}`,
        method: "POST",
        body: newReview,
      }),
      invalidatesTags: () => [{ type: "Review", id: "LIST" }],
    }),
  }),
});

export const {
  useGetRestaurantsQuery,
  useGetReviewsQuery,
  useGetMenuQuery,
  useCreateReviewMutation,
  useGetUsersQuery,
} = api;

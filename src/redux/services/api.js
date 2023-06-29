import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const api = createApi({
  reducerPath: "api",
  baseQuery: fetchBaseQuery({ baseUrl: "http://localhost:3001/api/" }),
  endpoints: (builder) => ({
    getRestaurants: builder.query({
      query: () => ({
        url: "restaurants",
      }),
    }),
  }),
});

export const { useGetRestaurantsQuery } = api;

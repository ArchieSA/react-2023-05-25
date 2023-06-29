import { STATUSES } from "@/constants/statuses";
import { createEntityAdapter, createSlice } from "@reduxjs/toolkit";

const requestEntityAdapter = createEntityAdapter();

export const requestSlice = createSlice({
  name: "request",
  initialState: requestEntityAdapter.getInitialState(),
  extraReducers: (builder) => {
    builder
      .addMatcher(
        (action) => action.type.endsWith("/fulfilled"),
        (state, { meta }) => {
          requestEntityAdapter.setOne(state, {
            id: meta.requestId,
            status: STATUSES.finished,
          });
        }
      )
      .addMatcher(
        (action) => action.type.endsWith("/pending"),
        (state, { meta }) => {
          requestEntityAdapter.setOne(state, {
            id: meta.requestId,
            status: STATUSES.pending,
          });
        }
      )
      .addMatcher(
        (action) => action.type.endsWith("/rejected"),
        (state, { error, meta }) => {
          requestEntityAdapter.setOne(state, {
            id: meta.requestId,
            status: STATUSES.failed,
            error,
          });
        }
      );
  },
});

export const requestReducer = requestSlice.reducer;

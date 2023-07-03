import { STATUSES } from "@/constants/statuses";

export const selectRequestModule = (state) => state.request;

export const selectRequestStatus = (state, requestId) =>
  selectRequestModule(state).entities[requestId]?.status || STATUSES.idle;

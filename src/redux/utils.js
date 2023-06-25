import { STATUSES } from "./const";
export const isLoading = (status) => status === STATUSES.pending;

// State
export const initialStateFactory = (adapter) =>
  adapter.getInitialState({
    status: STATUSES.idle,
  });

// Reducers
export const initializingReducer = (state) => {
  state.status = STATUSES.pending;
  state.error = undefined;
};

export const errorReducer = (state, action) => {
  const { type, payload, error } = action

  if (payload?.status === STATUSES.alreadyLoaded) {
    state.status = STATUSES.finished;
  } else {
    state.status = STATUSES.failed;
    state.error = error;
  }
  state.ts = new Date().getTime();
};

// REST
const composeUrl = (url, params) => {
  const qs = params && Object.keys(params).length ? new URLSearchParams(params).toString() : ''
  
  return `${url}${qs && '?' || ''}${qs}`
}

export const safeGet = async (url, params) => {
  const response = await fetch(composeUrl(url, params), { method: 'GET' });
  let data

  try {
    data = await response.json();
  }
  catch (error) {
    return rejectWithValue({ status: STATUSES.failed, error });
  }

  return data;
}

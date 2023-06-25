import { createSlice } from "@reduxjs/toolkit";
import { STATUSES } from "@/redux/const";
import { fetchUsersIfNotExist } from "./thunks/fetchUsersIfNotExist";
import { MODULE_NAME } from './const'
import { userEntityAdapter } from './selectors'
import { initialStateFactory, initializingReducer, errorReducer } from '../../utils'


export const { reducer: userReducer, actions: userActions } = createSlice({
  name: MODULE_NAME,
  initialState: initialStateFactory(userEntityAdapter),

  extraReducers: (builder) => builder
    .addCase(fetchUsersIfNotExist.pending, initializingReducer)

    .addCase(fetchUsersIfNotExist.fulfilled, (state, { payload }) => {
      userEntityAdapter.setAll(state, payload);
      state.status = STATUSES.finished;
      state.ts = new Date().getTime();
    })

    .addCase(fetchUsersIfNotExist.rejected, errorReducer),
});

import { createSlice } from "@reduxjs/toolkit";
import { normalizedUsers } from "@/mocks/normalized-fixtures";
import { entityToSlice } from '../../utils'

// { entities: { id: restaurant }, ids: []}
const INITIAL_STATE = entityToSlice(normalizedUsers);

const { reducer: userReducer, actions: userActions } = createSlice({
  name: "user",
  initialState: INITIAL_STATE,
});

export { userReducer, userActions }


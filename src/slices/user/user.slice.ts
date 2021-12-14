import { type PayloadAction, createSlice } from "@reduxjs/toolkit";
import { dispatch } from "_/__store";
import type {
  State,
  SetUser,
  SelectUser
} from "./user.slice.types";
import type { User } from "_/vendors/randomuser-me"

const initialState: State = {
  isLoaded: false
} as State

const { actions, reducer, name } = createSlice({
  name: "user",
  initialState,
  reducers: {
    set: (_, { payload }: PayloadAction<User>) => {
      return {
        isLoaded: true,
        ...payload
      }
    },
  },
});

export default reducer;

export const setUser: SetUser = (data) => dispatch(actions.set(data));
export const selectUser: SelectUser = (state) => state[name]

import { type PayloadAction, createSlice } from "@reduxjs/toolkit";
import { dispatch } from "_/__store";
import type {
  State,
  SetUserProfile,
  SelectUserProfile,
  SetAccounts,
  SelectAccounts,
} from "./user.slice.types";
import type { User } from "_/types/vendors/randomuser-me"

const initialState: State = {
  profile: undefined,
  accounts: undefined,
}

const { actions, reducer, name } = createSlice({
  name: "user",
  initialState,
  reducers: {
    setUserProfile: (state, { payload }: PayloadAction<User>) => {
      return {
        ...state,
        profile: payload,
      }
    },
    setAccounts: (state, { payload }: PayloadAction<State["accounts"]>) => ({
      ...state,
      accounts: payload
    })
  },
});

export default reducer;

export const setUserProfile: SetUserProfile = (userProfile) => dispatch(actions.setUserProfile(userProfile));
export const selectUserProfile: SelectUserProfile = (state) => state[name].profile;
export const setAccounts: SetAccounts = (accounts) => dispatch(actions.setAccounts(accounts));
export const selectAccounts: SelectAccounts = (state) => state[name].accounts;

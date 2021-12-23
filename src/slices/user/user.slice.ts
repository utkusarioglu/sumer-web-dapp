import { type PayloadAction, createSlice } from "@reduxjs/toolkit";
import { dispatch } from "_/__store";
import type {
  State,
  SetUserProfile,
  SelectUserProfile,
} from "./user.slice.types";
import type { User } from "_/types/vendors/randomuser-me"

const initialState: State = {
  profile: undefined,
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
  },
});

export default reducer;

export const setUserProfile: SetUserProfile = (userProfile) => dispatch(actions.setUserProfile(userProfile));
export const selectUserProfile: SelectUserProfile = (state) => state[name].profile;

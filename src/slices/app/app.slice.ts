import type { PayloadAction } from "@reduxjs/toolkit";
import { createSlice } from "@reduxjs/toolkit";
import type {
  State,
  SetUserDrawerOpen,
  // SetAppDrawerOpen,
  // SetShareDrawerOpen,
  SelectUserDrawerOpen,
  // SelectAppDrawerOpen,
  // SelectShareDrawerOpen,
} from "./app.slice.types";
import { userColorModePreference } from "_/utils/color-mode.utils";

const initialState: State = {
  userDrawerOpen: true,
  appDrawerOpen: false,
  shareDrawerOpen: false,
  colorMode: userColorModePreference(),
};

const { actions, reducer, name } = createSlice({
  name: "app",
  initialState,
  reducers: {
    setDrawerState: (
      state,
      { payload }: PayloadAction<{ drawerName: string; state: boolean }>
    ) => {
      return {
        // @ts-ignore
        userDrawerOpen: false,
        // @ts-ignore
        appDrawerOpen: false,
        // @ts-ignore
        shareDrawerOpen: false,
        [payload.drawerName]: payload.state,
        ...state,
      };
    },
  },
});

export default reducer;

export const setUserDrawerOpen: SetUserDrawerOpen = (state) =>
  actions.setDrawerState({ drawerName: "userDrawerOpen", state });

export const selectUserDrawerOpen: SelectUserDrawerOpen = (state) =>
  state[name].userDrawerOpen;

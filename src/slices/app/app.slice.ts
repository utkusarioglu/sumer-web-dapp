import type { PayloadAction } from "@reduxjs/toolkit";
import { createSlice } from "@reduxjs/toolkit";
import { dispatch } from "_/__store";
import type {
  State,
  SetUserDrawerOpen,
  SelectUserDrawerOpen,
  SetAppDrawerOpen,
  SelectAppDrawerOpen,
  SelectWeb3DrawerOpen,
  SetWeb3DrawerOpen,
} from "./app.slice.types";
import { userColorModePreference } from "_/utils/color-mode.utils";

const initialState: State = {
  userDrawerOpen: false,
  appDrawerOpen: false,
  shareDrawerOpen: false,
  web3DrawerOpen: false,
  colorMode: userColorModePreference(),
};

const { actions, reducer, name } = createSlice({
  name: "app",
  initialState,
  reducers: {
    setDrawerState: (
      state,
      { payload }: PayloadAction<{ name: string; state: boolean }>
    ) => {
      return {
        ...state,
        userDrawerOpen: false,
        appDrawerOpen: false,
        shareDrawerOpen: false,
        web3DrawerOpen: false,
        [`${payload.name}DrawerOpen`]: payload.state,
      };
    },
  },
});

export default reducer;

export const setUserDrawerOpen: SetUserDrawerOpen = (state) =>
  dispatch(actions.setDrawerState({ name: "user", state }));
export const selectUserDrawerOpen: SelectUserDrawerOpen = (state) =>
  state[name].userDrawerOpen;

export const setAppDrawerOpen: SetAppDrawerOpen = (state) =>
  dispatch(actions.setDrawerState({ name: "app", state }));
export const selectAppDrawerOpen: SelectAppDrawerOpen = (state) =>
  state[name].appDrawerOpen;

export const setWeb3DrawerOpen: SetWeb3DrawerOpen = (state) =>
  dispatch(actions.setDrawerState({ name: "web3", state }));
export const selectWeb3DrawerOpen: SelectWeb3DrawerOpen = (state) =>
  state[name].web3DrawerOpen;


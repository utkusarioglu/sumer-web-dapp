import type { PayloadAction } from "@reduxjs/toolkit";
import { createSlice } from "@reduxjs/toolkit";
import { dispatch } from "_/__store";
import type {
  State,
  SetUserDrawerOpen,
  SelectUserDrawerOpen,
  SetAppDrawerOpen,
  SelectAppDrawerOpen,
  SetWeb3Connected,
  SelectWeb3Connected,
  SelectWeb3DrawerOpen,
  SetWeb3DrawerOpen,
  SelectColorMode,
  SetColorMode,
} from "./app.slice.types";
import { userColorModePreference } from "_/utils/color-mode.utils";

const initialState: State = {
  userDrawerOpen: false,
  appDrawerOpen: false,
  shareDrawerOpen: false,
  web3DrawerOpen: false,
  colorMode: userColorModePreference(),
  web3Connected: false,
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
    setWeb3Connected: (state, { payload }: PayloadAction<boolean>) => ({
      ...state,
      web3Connected: payload,
    }),
    setColorMode: (state, { payload }: PayloadAction<State["colorMode"]>) => {
      const colorMode = ["light", "dark"].includes(payload)
        ? payload
        : userColorModePreference();
      return {
        ...state,
        colorMode,
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

export const setWeb3Connected: SetWeb3Connected = (state) =>
  dispatch(actions.setWeb3Connected(state));
export const selectWeb3Connected: SelectWeb3Connected = (state) =>
  state[name].web3Connected;

export const setWeb3DrawerOpen: SetWeb3DrawerOpen = (state) =>
  dispatch(actions.setDrawerState({ name: "web3", state }));
export const selectWeb3DrawerOpen: SelectWeb3DrawerOpen = (state) =>
  state[name].web3DrawerOpen;

export const selectColorMode: SelectColorMode = (state) =>
  state[name].colorMode;
export const setColorMode: SetColorMode = (mode) =>
  dispatch(actions.setColorMode(mode));

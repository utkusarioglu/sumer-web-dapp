import type { Selector } from "@reduxjs/toolkit";
import type { RootState } from "_/__store";

export type State = {
  userDrawerOpen: boolean;
  appDrawerOpen: boolean;
  shareDrawerOpen: boolean;
  web3DrawerOpen: boolean;
  colorMode: "dark" | "light";
};

export type SetUserDrawerOpen = (state: boolean) => void;
export type SetAppDrawerOpen = (state: boolean) => void;
export type SetShareDrawerOpen = (state: boolean) => void;
export type SetWeb3DrawerOpen = (state: boolean) => void;

export type SelectUserDrawerOpen = Selector<RootState, State["userDrawerOpen"]>;
export type SelectWeb3DrawerOpen = Selector<RootState, State["web3DrawerOpen"]>;
export type SelectAppDrawerOpen = Selector<RootState, State["appDrawerOpen"]>;
export type SelectShareDrawerOpen = Selector<
  RootState,
  State["shareDrawerOpen"]
>;

export type SelectColorMode = Selector<RootState, State["colorMode"]>;
export type SetColorMode = (mode: State["colorMode"]) => void;

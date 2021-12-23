import type { Selector } from "@reduxjs/toolkit";
import type { RootState } from "_/__store";
import type { User } from "_/types/vendors/randomuser-me";

export type State = {
  profile: User | undefined;
};
export type SetUserProfile = (data: User) => void;
export type SelectUserProfile = Selector<RootState, State["profile"]>;

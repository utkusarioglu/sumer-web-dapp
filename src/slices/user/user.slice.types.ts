import type { Selector } from "@reduxjs/toolkit";
import type { RootState } from "_/__store";
import type { User } from "_/types/vendors/randomuser-me";

export type State = User & { isLoaded: boolean };
export type SetUser = (data: User) => void;
export type SelectUser = Selector<RootState, State>;

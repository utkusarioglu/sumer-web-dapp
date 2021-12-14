import type { Selector } from "@reduxjs/toolkit";
import type { RootState } from "_/__store";
import type { Block } from "_/types/block.types";

export type Data = Block;
type List = Data[];
export interface BlockState {
  time: number;
  list: List;
}
export type Push = (data: Data) => void;
export type SelectLatest = Selector<RootState, Data | undefined>;
export type SelectList = Selector<RootState, List>;
export type SelectTime = Selector<RootState, number>;

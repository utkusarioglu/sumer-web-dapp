import type { Selector } from "@reduxjs/toolkit";
import type { RootState } from "_/__store";
import type { Block } from "_/types/block.types";

export type Data = Block;
export type List = Data[];
export interface BlockState<T> {
  time: number;
  list: T;
}
export type Push = (data: Data) => void;
export type SelectLatest = Selector<RootState, Data | undefined>;
export type SelectList = Selector<RootState, Data[]>;

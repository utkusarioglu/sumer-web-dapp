import { type PayloadAction, createSlice } from "@reduxjs/toolkit";
import { dispatch } from "_/__store";
import type { BlockState, Data, Push, SelectLatest, SelectList, SelectTime } from "./blocks.slice.types";

const initialState: BlockState = {
  time: 0,
  list: [],
};

const { actions, reducer, name } = createSlice({
  name: "blocks",
  initialState,
  reducers: {
    push: (state, { payload }: PayloadAction<Data>) => {
      return {
        time: Date.now(),
        list: [payload, ...state.list],
      };
    },
  },
});

export default reducer;

export const push: Push = (data) => dispatch(actions.push(data));
export const selectLatest: SelectLatest = (state) => state[name].list[0]
export const selectList: SelectList = (state) => state[name].list
export const selectTime: SelectTime = (state) => state[name].time;

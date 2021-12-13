import { type PayloadAction, type Selector, createSlice } from "@reduxjs/toolkit";
import { dispatch, type RootState } from "_/__store";


type Data = any;
type List = Data[];

interface BlockState<T> {
  time: number;
  list: T;
}

const initialState: BlockState<List> = {
  time: 0,
  list: [],
};

type Push<T> = (data: T) => void;
type SelectLatest<T> = Selector<RootState, T>
type SelectList<T> = Selector<RootState, T[]>

const { actions, reducer, name } = createSlice({
  name: "blocks",
  initialState,
  reducers: {
    push: (state, { payload }: PayloadAction<any>) => {
      return {
        time: Date.now(),
        list: [payload, ...state.list],
      };
    },
  },
});

export default reducer;

export const push: Push<Data> = (data) => dispatch(actions.push(data));
export const selectLatest: SelectLatest<Data> = (state) => state[name].list[0]
export const selectList: SelectList<Data> = (state) => state[name].list

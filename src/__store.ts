import { configureStore } from "@reduxjs/toolkit";
import blocks from "_slices/blocks/blocks.slice";

const store = configureStore({
  reducer: {
    blocks,
  },
});

export default store;
export const { dispatch, subscribe, getState } = store;
export type RootState = ReturnType<typeof store.getState>;

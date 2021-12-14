import { configureStore } from "@reduxjs/toolkit";
import blocks from "_slices/blocks/blocks.slice";
import user from "_slices/user/user.slice";

const store = configureStore({
  reducer: {
    blocks,
    user,
  },
});

export default store;
export const { dispatch, subscribe, getState } = store;
export type RootState = ReturnType<typeof store.getState>;

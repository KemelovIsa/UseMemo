import { configureStore } from "@reduxjs/toolkit";
import todoSlice from "./tools/todoSlice";

export const store = configureStore({
  reducer: {
    todos: todoSlice, 
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

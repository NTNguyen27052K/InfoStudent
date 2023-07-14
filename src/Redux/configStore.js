import { configureStore } from "@reduxjs/toolkit";
import { infoStuReducer } from "./Reducer/infoStuReducer";

export const store = configureStore({
  reducer: {
    infoStu: infoStuReducer,
  },
});

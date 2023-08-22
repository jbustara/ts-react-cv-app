import { configureStore } from "@reduxjs/toolkit";
import educationReducer from "../features/education/educationSlice";
import skillsReducer from "../features/skills/skillsSlice";

export const store = configureStore({
  reducer: {
    educations: educationReducer,
    skills: skillsReducer,
  },
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

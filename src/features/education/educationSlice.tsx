import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { EducationData, Status } from "../../types";

interface EducationState {
  educations: EducationData[];
  status: Status | "";
}

export const fetchEducation = createAsyncThunk("education/fetch", async () => {
  const response = await fetch("api/educations");
  return await response.json();
});

const initialState: EducationState = {
  educations: [],
  status: "",
};
export const educationSlice = createSlice({
  name: "educations",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchEducation.fulfilled, (state, { payload }) => {
        state.educations = payload;
        state.status = Status.done;
      })
      .addCase(fetchEducation.pending, (state) => {
        state.status = Status.loading;
      })
      .addCase(fetchEducation.rejected, (state) => {
        state.status = Status.error;
      });
  },
});

export default educationSlice.reducer;

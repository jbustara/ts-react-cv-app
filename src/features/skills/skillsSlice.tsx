import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

interface SkillsState {
  skills: SkillData[];
}

export const fetchSkills = createAsyncThunk("skills/fetch", async () => {
  const response = await fetch("api/skills");
  return await response.json();
});

export const postSkills = createAsyncThunk(
  "skills/post",
  async (skill: SkillData) => {
    await fetch("api/skills", {
      method: "POST",
      body: JSON.stringify(skill),
    });
    return skill;
  }
);

const initialState: SkillsState = {
  skills: [],
};

export const skillsSlice = createSlice({
  name: "skills",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchSkills.fulfilled, (state, { payload }) => {
        state.skills = payload;
      })
      .addCase(postSkills.fulfilled, (state, { payload }) => {
        state.skills.push(payload);
      });
  },
});

export default skillsSlice.reducer;

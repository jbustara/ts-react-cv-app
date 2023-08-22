import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { SkillData } from "../../types";

interface SkillsState {
  skills: SkillData[];
  skillsIsOpen: boolean;
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
  skillsIsOpen: false,
};

export const skillsSlice = createSlice({
  name: "skills",
  initialState,
  reducers: {
    openSkills: (state) => {
      state.skillsIsOpen = true;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchSkills.fulfilled, (state, { payload }) => {
        console.log("payload", payload);
        const skillJSON = localStorage.getItem("skills");
        if (skillJSON) {
          try {
            state.skills = JSON.parse(skillJSON);
          } catch (error) {
            console.log("error", error);
          }
        }
      })
      .addCase(postSkills.fulfilled, (state, { payload }) => {
        state.skills.push(payload);
        localStorage.setItem("skills", JSON.stringify(state.skills));
      });
  },
});
export const { openSkills } = skillsSlice.actions;
export default skillsSlice.reducer;

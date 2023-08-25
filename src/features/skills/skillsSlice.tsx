import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { SkillData } from "../../types";

interface SkillsState {
  skills: SkillData[];
  skillsIsOpen: boolean;
}

export const fetchSkills = createAsyncThunk("skills/fetch", async () => {
  const response = await fetch("api/skills");
  const data = await response.json();
  //If there is data from server: save in the localStorage.
  if (data.length) {
    localStorage.setItem("skills", JSON.stringify(data));
    return data;
  } else {
    //If there isn't data, check if there is data in localStorage to return it and post it
    const skillJSON = localStorage.getItem("skills");
    if (skillJSON) {
      try {
        const data = JSON.parse(skillJSON);
        //post all skills in localStorage
        await postAllSkills(data);
        return data;
      } catch (error) {
        return [];
      }
    }
    return [];
  }
});

const postAllSkills = async (skills: SkillData[]) => {
  await fetch("api/skills/all", {
    method: "POST",
    body: JSON.stringify(skills),
  });
  return;
};

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
        console.log("payloadGet", payload);
        state.skills = payload;
      })
      .addCase(postSkills.fulfilled, (state, { payload }) => {
        console.log("payloadPost", payload);
        state.skills.push(payload);
      });
  },
});
export const { openSkills } = skillsSlice.actions;
export default skillsSlice.reducer;

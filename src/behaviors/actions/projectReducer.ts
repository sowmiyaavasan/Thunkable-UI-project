import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export interface Project {
  name: string;
  date: string;
}

interface ProjectsState {
  projects: Project[];
}

const initialState: ProjectsState = {
  projects: [],
};

const projectsSlice = createSlice({
  name: "projects",
  initialState,
  reducers: {
    // Enables user to add a new project
    addProject: (state, action: PayloadAction<Project>) => {
      state.projects.unshift(action.payload);
    },

    // Enables user to edit a project
    editProject: (
      state,
      action: PayloadAction<{ id: number; name: string; date: string }>
    ) => {
      const { id, name, date } = action.payload;
      state.projects[id] = { name, date };
    },

    // Enables user to delete a project
    deleteProject: (state, action: PayloadAction<{ id: number }>) => {
      const { id } = action.payload;
      state.projects.splice(id, 1);
    },
  },
});

// Exporting action creators and reducer
export const { addProject, editProject, deleteProject } = projectsSlice.actions;
export default projectsSlice.reducer;

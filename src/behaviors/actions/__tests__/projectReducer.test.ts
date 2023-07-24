import { configureStore } from "@reduxjs/toolkit";
import projectsReducer, { addProject, Project } from "../projectReducer";

// Test for addProject reducer
test("addProject should add a new project to the state", () => {
  const store = configureStore({
    reducer: {
      projects: projectsReducer,
    },
  });

  // Create a sample project object with a name and date
  const project: Project = { name: "Test Project", date: "2023-07-22" };
  store.dispatch(addProject(project));

  const newState = store.getState().projects;
  // State should have 1 project added
  expect(newState.projects).toHaveLength(1);
  // Check to see if the project added matches the sample project
  expect(newState.projects[0]).toEqual(project);
});

//Similar to this we can add tests for editProject, deleteProject.

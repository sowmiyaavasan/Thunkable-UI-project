import ProjectItem from "../ProjectItem/ProjectItem";
import { useSelector } from "react-redux";
import { getProjects } from "src/behaviors/selectors/projectSelector";

export default function ProjectList() {
  // Access the projects state from the redux store using useSelector hook
  const projects = useSelector(getProjects);

  return (
    <div className="project-list">
      {/* Iterates to display each project */}
      {projects.length > 0 &&
        projects.map((project: { name: string; date: string }, id: number) => {
          return <ProjectItem project={project} id={id} />;
        })}
    </div>
  );
}

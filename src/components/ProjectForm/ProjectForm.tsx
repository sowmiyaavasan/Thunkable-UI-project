import { KeyboardEvent, useState } from "react";
import { useDispatch } from "react-redux";
import { addProject } from "src/behaviors/actions/projectReducer";
import { ENTER, DATE_FORMAT_OPTIONS } from "src/tools/constants";
import FormIcon from "src/assets/FormIcon.svg";
import "./ProjectForm.css";

type ProjectFormProps = {
  setFormShow: (show: boolean) => void;
};

export default function ProjectForm({ setFormShow }: ProjectFormProps) {
  // State to handle project name
  const [projectName, setProjectName] = useState<string>("");

  const dispatch = useDispatch();

  // Function to handle key press events in the input field
  const handleKeyPress = (e: KeyboardEvent<HTMLInputElement>) => {
    if (e.code === ENTER) {
      // Get the current date and format it
      const date = new Date()
        .toLocaleDateString("en-US", DATE_FORMAT_OPTIONS)
        .replace(/at/, "");

      // Reset the input field and hide the form
      setProjectName("");
      setFormShow(false);

      // Dispatch the action to add the new project to the store
      dispatch(addProject({ date, name: projectName }));
    }
  };

  return (
    <div className="item-row">
      {/* Beaver icon */}
      <img src={FormIcon} alt="beaver icon" className="beaver-icon" />
      {/* Input field for project name */}
      <input
        className="form-input"
        type="text"
        placeholder="Name your project"
        value={projectName}
        onChange={(e) => setProjectName(e.target.value)}
        onKeyDown={(e) => handleKeyPress(e)}
      />
    </div>
  );
}

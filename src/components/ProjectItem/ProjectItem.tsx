import { KeyboardEvent, MouseEvent, useState } from "react";
import { useDispatch } from "react-redux";
import {
  editProject,
  deleteProject,
} from "src/behaviors/actions/projectReducer";
import { Popconfirm } from "antd";
import { ENTER, DATE_FORMAT_OPTIONS } from "src/tools/constants";
import FormIcon from "src/assets/FormIcon.svg";
import EditIcon from "src/assets/EditIcon.svg";
import EditHoverIcon from "src/assets/EditIcon_Hover.svg";
import DeleteIcon from "src/assets/DeleteIcon.svg";
import DeleteHoverIcon from "src/assets/DeleteIcon_Hover.svg";
import "./ProjectItem.css";

type Project = {
  name: string;
  date: string;
};

type ProjectItemProps = {
  id: number;
  project: Project;
};

export default function ProjectItem({ project, id }: ProjectItemProps) {
  // State to check if component is in editing mode or not
  const [editing, setEditing] = useState<boolean>(false);

  // State to track the new name of the project when editing
  const [newName, setNewName] = useState<string>(project.name);

  // State to show the alert when delete is clicked
  const [showConfirm, setShowConfirm] = useState<boolean>(false);

  const dispatch = useDispatch();

  // Function to handle mouseover event on edit and delete icons
  const handleMouseOver = (e: MouseEvent<HTMLImageElement>, icon: string) => {
    e.currentTarget.src = icon;
  };

  // Function to handle mouseout event on edit and delete icons
  const handleMouseOut = (e: MouseEvent<HTMLImageElement>, icon: string) => {
    e.currentTarget.src = icon;
  };

  // Function to enable the edit mode when the user clicks on the edit icon
  const handleEdit = () => {
    setEditing(true);
    // Set the newName state with the current project name
    setNewName(project.name);
  };

  // Function to save the new project with new name and date
  const saveEditedProject = () => {
    const date = new Date()
      .toLocaleDateString("en-US", DATE_FORMAT_OPTIONS)
      .replace(/at/, "");

    dispatch(editProject({ id, date, name: newName }));
    setEditing(false);
  };

  // Function to listen when user pressess "Enter" to save the project
  const handleKeyPress = (e: KeyboardEvent<HTMLInputElement>) => {
    if (e.code === ENTER) {
      saveEditedProject();
    }
  };

  // Function to handle deletion of a project when delete icon is pressed
  const handleDelete = () => {
    dispatch(deleteProject({ id }));
    setShowConfirm(false);
  };

  return (
    <div className="list-row" key={id}>
      {/* Beaver icon */}
      <img src={FormIcon} alt="beaver icon" className="beaver-icon" />
      <div className="project-item-inner">
        {editing ? (
          // Input field for editing project name
          <input
            className="form-input"
            type="text"
            placeholder="Name your project"
            value={newName}
            onChange={(e) => setNewName(e.target.value)}
            onKeyDown={(e) => handleKeyPress(e)}
          />
        ) : (
          // Display project name if not in editing mode
          <span className="project-title">{project.name.substring(0, 16)}</span>
        )}
        {/* Edit icon */}
        <img
          src={editing ? EditHoverIcon : EditIcon}
          alt="edit icon"
          onMouseOver={(e) => handleMouseOver(e, EditHoverIcon)}
          onMouseOut={(e) => handleMouseOut(e, EditIcon)}
          onClick={editing ? saveEditedProject : handleEdit}
        />
        {/* Project date */}
        <span className="date">{project.date}</span>
        {/* Delete icon */}
        <img
          src={showConfirm ? DeleteHoverIcon : DeleteIcon}
          alt="delete icon"
          onMouseOver={(e) => handleMouseOver(e, DeleteHoverIcon)}
          onMouseOut={(e) => handleMouseOut(e, DeleteIcon)}
          onClick={() => setShowConfirm(!showConfirm)}
        />
        {/* Popconfirm from ant design to confirm deletion */}
        <Popconfirm
          title="Are you sure you want to delete this project?"
          description="This action can't be undone."
          cancelText="No"
          okText="Yes"
          // icon={QuestionIcon}
          open={showConfirm}
          onConfirm={handleDelete}
          onCancel={() => setShowConfirm(false)}
        />
      </div>
    </div>
  );
}

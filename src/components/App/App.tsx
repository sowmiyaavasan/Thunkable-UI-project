import { useState } from "react";
import "./App.css";
import Header from "../Header/Header";
import ProjectForm from "../ProjectForm/ProjectForm";
import ProjectList from "../ProjectList/ProjectList";

function App() {
  // State to manage whether the ProjectForm is shown or hidden
  const [formShow, setFormShow] = useState<boolean>(false);
  // State to manage background state for CSS styling
  const [background, setBackground] = useState<boolean>(false);

  // Function to set both formShow and background states to true
  const setFormAndBackground = () => {
    setFormShow(true);
    setBackground(true);
  };

  return (
    <div className={`app ${background && "hover"}`}>
      <Header setFormAndBackground={setFormAndBackground} formShow={formShow} />
      {/* Render the ProjectForm component conditionally based on the formShow state */}
      {formShow && <ProjectForm setFormShow={setFormShow} />}
      <ProjectList />
    </div>
  );
}

export default App;

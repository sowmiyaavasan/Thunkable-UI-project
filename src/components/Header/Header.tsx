import { useState, MouseEvent } from "react";
import "./Header.css";
import Beaver from "src/assets/ThunkableSmallBeaver.png";
import ThunkableBeaver from "src/assets/ThunkableBeaver.png";
import PlusSignHover from "src/assets/PlusSignHover.png";

type HeaderProps = {
  formShow: boolean;
  setFormAndBackground: () => void;
};

export default function Header({
  formShow,
  setFormAndBackground,
}: HeaderProps) {
  // State to handle hovering of mouse
  const [hover, setHover] = useState<boolean>(false);

  // Function when mouse is hovered over the plus sign icon
  const handleMouseOver = (e: MouseEvent<HTMLImageElement>) => {
    setHover(true);
    e.currentTarget.src = PlusSignHover;
  };

  // Function when mouse is moved away from the plus sign icon
  const handleMouseOut = (e: MouseEvent<HTMLImageElement>) => {
    if (!formShow) {
      setHover(false);
    }
    e.currentTarget.src = PlusSignHover;
  };

  // Function to handle click on the plus sign icon
  const handleClick = () => {
    setFormAndBackground(); // Call this function to set form and background states
  };

  return (
    <div className={`header ${!hover && "header-no-hover"}`}>
      {/* Left section of the header */}
      <div className="left">
        <img
          src={hover ? ThunkableBeaver : Beaver}
          alt="beaver"
          className="beaver"
        />
        <div className="project-title">MY PROJECTS</div>
      </div>
      {/* Plus sign icon */}
      <img
        src={PlusSignHover}
        alt="plus sign"
        className="plus-sign"
        onMouseOver={(e) => handleMouseOver(e)}
        onMouseOut={(e) => handleMouseOut(e)}
        onClick={handleClick}
      />
    </div>
  );
}

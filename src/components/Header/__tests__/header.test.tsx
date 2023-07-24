import { render, fireEvent, screen } from "@testing-library/react";
import Header from "../Header";

test("Header component should render properly", () => {
  // Render the Header component with initial prop values
  const formShow = false;
  const setFormAndBackground = jest.fn();
  render(
    <Header formShow={formShow} setFormAndBackground={setFormAndBackground} />
  );

  // Verify that the beaver image is rendered with the correct alt attribute
  const beaverImage = screen.getByAltText("beaver");
  expect(beaverImage).toBeInTheDocument();

  // Verify that the "MY PROJECTS" text is rendered
  const projectsTitle = screen.getByText("MY PROJECTS");
  expect(projectsTitle).toBeInTheDocument();

  // Verify that the plus sign image is rendered with the correct alt attribute
  const plusSignImage = screen.getByAltText("plus sign");
  expect(plusSignImage).toBeInTheDocument();

  // Simulate click event on the plus sign image
  fireEvent.click(plusSignImage);

  // Verify that the setFormAndBackground function was called
  expect(setFormAndBackground).toHaveBeenCalledTimes(1);
});

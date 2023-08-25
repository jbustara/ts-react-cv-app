import { render, screen } from "@testing-library/react";
import PhotoBox from "./PhotoBox";

describe("PhotoBox component", () => {
  it("Renders PhotoBox component", () => {
    render(<PhotoBox name="test name" avatar="https://test.com" />);
    //renders name and avatar
    expect(screen.getByText("test name")).toBeInTheDocument();
    expect(screen.getByRole("img")).toBeInTheDocument();
  });
});

import { render, screen } from "@testing-library/react";
import Expertise from "./Expertise";
import { experiences } from "../../constants";

jest.mock("nanoid", () => {
  return { nanoid: () => Math.random() };
});

describe("Expertise component", () => {
  it("Renders expertise component", () => {
    render(<Expertise experiences={experiences} />);
    //renders 3 companies
    expect(screen.getByText(experiences[0].info.company)).toBeInTheDocument();
    expect(screen.getByText(experiences[1].info.company)).toBeInTheDocument();
    expect(screen.getByText(experiences[2].info.company)).toBeInTheDocument();
  });
});
